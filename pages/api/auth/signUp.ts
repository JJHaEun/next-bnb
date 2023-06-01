import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../src/lib/data";
import { UserType } from "../../../src/lib/data/user";
import { SignUpAPIBody } from "../../../src/lib/api/auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default function SignUpAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { body }: { body: SignUpAPIBody } = req;
    const { email, firstname, lastname, password, birthday } = body;
    if (!email || !firstname! || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다");
    }
    const userExist = Data.user.userExist({ email });
    const hashedPassword = bcrypt.hashSync(password, 8);
    if (userExist) {
      res.statusCode = 409;
      console.log("이미 가입된 이메일 입니다");
      return res.send("이미 가입된 이메일 입니다");
    }
    const users = Data.user.getUserList();
    let userId;
    if (users.length === 0) {
      userId = 1;
    } else {
      userId = users[users.length - 1].id + 1;
    }
    const newUser: UserType = {
      id: userId,
      email,
      firstname,
      lastname,
      password: hashedPassword,
      birthday,
      profileImage: "/static/image/user/default_user_profile_image.jpg",
    };
    Data.user.writeUser([...users, newUser]); // 유저정보 저장
    const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);

    // 만들어진 토큰을 브라우저 쿠키에 저장하기(응답(=res) 헤더에 Set-Cookie설정.)
    res.setHeader(
      "Set-Cookie",
      `access_token=${token}; path=/; expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3 // 토근 만료기간 => 3일
      ).toUTCString()}; httponly`
    );

    res.statusCode = 200;
    return res.end();
  }

  res.statusCode = 405;

  return res.end();
}

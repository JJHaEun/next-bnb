import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../src/lib/data";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { LoginAPIBody } from "../../../src/lib/api/auth";
import { StoredUserType } from "../../../src/lib/data/user";

export default function LoginAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { body }: { body: LoginAPIBody } = req;
      const { email, password } = body;
      const user = Data.user.find({ email });
      if (!user) {
        res.statusCode = 404;
        return res.send("가입되지 않은 이메일 입니다.");
      }
      const isPasswordMatched = bcrypt.compareSync(password, user.password);
      if (!isPasswordMatched) {
        res.statusCode = 403;
        return res.send("비밀번호가 일치하지 않습니다.");
      }
      const token = jwt.sign(String(user.id), process.env.JWT_SECRET!);
      res.setHeader(
        "Set-Cookie",
        `access_token=${token}; path=/; expires=${new Date(
          Date.now() + 60 * 60 * 24 * 1000 * 3
        ).toUTCString()}; httponly`
      );
      const userWithoutPassword: Partial<Pick<StoredUserType, "password">> =
        user;

      delete userWithoutPassword.password;
      res.statusCode = 200;
      return res.send(user);
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      return res.send(e);
    }
    return res.end();
  }
  res.statusCode = 405;

  return res.end();
}

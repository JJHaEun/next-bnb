import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Data } from "../../../src/lib/data";
import { StoredUserType } from "../../../src/lib/data/user";

// api요청해 쿠키 잘 전달되었는지 확인하기
export default function Me(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const accessToken = req.headers.cookie;
      if (!accessToken) {
        res.statusCode = 400;
        return res.send("access_token이 없습니다");
      }
      const userId = jwt.verify(accessToken, process.env.JWT_SECRET!);
      const user = Data.user.find({ id: Number(userId) });
      // userId의 유저를 찾아 비밀번호를 제거하고 결과로 보내기
      if (!user) {
        res.statusCode = 404;
        return res.send("해당 유저가 존재하지 않습니다.");
      }
      const userWithoutPassword: Partial<Pick<StoredUserType, "password">> =
        user;

      delete userWithoutPassword.password;
      res.statusCode = 200;
      return res.send(userWithoutPassword); //{data}
    } catch (e) {
      res.statusCode = 500;
      return res.send(e);
    }
  }
  res.statusCode = 405;
  return res.end();
}

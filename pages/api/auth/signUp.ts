import { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../../src/lib/data";
import { UserType } from "../../../src/lib/data/user";

export default function SignUpAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { body }: { body: UserType } = req;
    const { email, firstname, lastname, password, birthday } = body;
    if (!email || !firstname! || !lastname || !password || !birthday) {
      res.statusCode = 400;
      return res.send("필수 데이터가 없습니다");
    }
    const userExist = Data.user.userExist({ email });
    if (userExist) {
      res.statusCode = 409;
      res.send("이미 가입된 이메일 입니다");
    }
    res.statusCode = 200;
  }

  res.statusCode = 405;

  return res.end();
}

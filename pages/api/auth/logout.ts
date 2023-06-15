import { NextApiRequest, NextApiResponse } from "next";

// 로그아웃 API만들기
export default function LogoutAPI(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "DELETE") {
      // 로그아웃하기!
      res.setHeader(
        "Set-Cookie",
        "access_token=; path=/; expires=Thu, 01 Jan 1907 00:00:00 GMT; httponly"
      );
      res.statusCode = 204;
      return res.end();
    }
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
  res.statusCode = 405;

  return res.end();
}

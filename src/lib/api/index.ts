import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // axios요청할 기본 url 환경변수에 설정하고 여기 넣어줌.
});

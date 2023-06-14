export const cookieStringToObject = (cookieString: string | undefined) => {
  // cookie에 출력되는 access_token을 비롯한 다른 정보들은 문자열 형태 =>
  // 따라서 객체 형태로 만들어주는 함수!
  const cookies: { [key: string]: string } = {};
  if (cookieString) {
    // "token:value"
    //.split원래 문자열이 요소 사이에 다양한 구분 기호
    // (공백과 세미콜론의 서로 다른 조합)를 갖기 때문입니다. 모두 찾을 수 있는 간단한 문자열이 전달되지 않습니다.
    const itemString = cookieString.split(/\s*;\s*/);
    itemString.forEach((pairs) => {
      // ["token","value"]
      const pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join("=");
    });
    return cookies;
  }
};

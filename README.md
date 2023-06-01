# next-bnb

- 브라우저의 호환성등을 위해 모든 html의 스타일을 간단히 reset하는 styled-reset을 사용한다.
- styled-components를 사용하여 스타일링 한다.
- svg전용 폴더를 만들고, 해당 컴포넌트를 만들기 위해 babel 세팅을 진행, 컴포넌트를 만들어 사용한다.

- 모달 => 리액트 potal이라는 것을 이용해보았다.
  직접 모달을 만드는 방법도 있으나 매번 새롭게 만들어야한다는 단점이 존재한다. - 포탈은 부모 컴포넌트 DOM계층 외부에 있는 DOM노드로 자식을 랜더링 하는 것이라고 나와있는데, 다시 말하자면 **엘리먼트를 다른 엘리먼트에서 랜더링 하게 하는 방법**이라고 할 수 있다.

```js
ReactDom.createPotal(child, container);
```

이런식으로 사용하게되며 첫번째 인자로는 리엑트 컴포넌트를 받고, 두번째 인자로는 리엑트 컴포넌트를 넣을 Dom을 받게된다.

---

#### bcryptjs라는 라이브러리를 사용하여 비밀번호 암호화하기

> yarn add bcryptjs
> yarn add @types/bcryptjs

#### jwt토큰을 사용하기 위해 jsonwebtoken설치

> yarn add jsonwebtoken
> yarn add @types/jsonwebtoken

>

````js
  // 만들어진 토큰을 브라우저 쿠키에 저장하기위해 res헤더에 Set-Cookie설정
    res.setHeader(
      "Set-Cookie",
      // access_token이라는 쿠키명에 token을 저자으 httponly로 api통신에서만 쿠키값을 불러올 수 있게함.
      `access_token=${token}; path=/; expires=${new Date(
        Date.now() + 60 * 60 * 24 * 1000 * 3 // 토근 만료기간 => 3일
      )}; httponly`
    );
    ```
````

>

```js
import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // axios요청할 기본 url 환경변수에 설정하고 여기 넣어줌.
});
```

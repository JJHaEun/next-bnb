export const monthList = [
  "월",
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export const dayList = [
  "일",
  ...Array.from(Array(31), (_, i) => String(i + 1)),
];
// Array.from은 새 배열을 만들겠다는 것.
// Array(31)은 길이가 31인 배열을 만든다.(0부터 30 까지의 요소를 가짐) 그리고 그것은 인덱스에 1이 더해진 배열이 된다.
// export const dayList = new Array(31).fill(1).map((el,i)=>el+i) 얘도 같은 결과

export const yearList = [
  "년",
  ...Array.from(Array(124), (_, i) => String(2024 - i)),
]; // 1900년 ~ 2024년까지. 124는 두 년도의 차이.
// export const dayList = new Array(124).fill(1).map((el,i)=>2024-i)

// 유저 리스트 데이터 불러오기

import { readFileSync, writeFileSync } from "fs";

export type StoredUserType = {
  id: number;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  birthday: string;
  profileImage: string;
};

const getUserList = () => {
  const usersBuffer = readFileSync("src/data/users.json");
  const usersString = usersBuffer.toString();
  if (!usersString) {
    return [];
  }
  const users: StoredUserType[] = JSON.parse(usersString);
  return users;
};

// email의 유저가 있는지 확인
const userExist = ({ email }: { email: string }) => {
  const users = getUserList();
  return users.some((user) => user.email === email);
};

// 유저리스트(유저정보)저장하기
const writeUser = async (users: StoredUserType[]) => {
  writeFileSync("src/data/users.json", JSON.stringify(users));
};

// 입력된 email의 유저정보 불러오기
const find = ({ email, id }: { email?: string; id?: number }) => {
  const users = getUserList();
  return users.find((user) => user.email === email || user.id === id);
};
export default { getUserList, userExist, writeUser, find };

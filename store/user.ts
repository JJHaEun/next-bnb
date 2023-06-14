import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/reduxState";
import { UserType } from "../types/user";

// 초기 상태
const initialState: UserState = {
  id: 0,
  email: "",
  lastname: "",
  firstname: "",
  birthday: "",
  isLoggedIn: false,
  profileImage: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    // 로그인한 유저 변경
    setLoggedInUser(state, action: PayloadAction<UserType>) {
      state = { ...action.payload, isLoggedIn: true };
      return state;
    },
  },
});

export const userActions = { ...user.actions };

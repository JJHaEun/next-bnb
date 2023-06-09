import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommonState } from "../types/reduxState";

// 초기상태

const initialState: CommonState = {
  validateMode: false,
};

export const common = createSlice({
  name: "common",
  initialState,
  reducers: {
    // validateMode 변경
    setValidateMode(state, action: PayloadAction<boolean>) {
      state.validateMode = action.payload;
    },
  },
});

export const commonActions = { ...common.actions };

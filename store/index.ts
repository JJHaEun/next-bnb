import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { combineReducers } from "redux";
import { common } from "./common";
import { user } from "./user";

const rootReducer = combineReducers({
  common: common.reducer,
  user: user.reducer,
});

// store타입
export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    if (state === initialRootState) {
      return {
        ...state,
        ...action.payload,
      };
    }
    return state;
  }
  return rootReducer(state, action);
};

// 타입 지원되는 커스텀 useSelector만들기.즉, 필요한 타입을 지정해둔 useSelector만들기
// (useSelector를 useReduxSelector로 이름 바꿔서 import 한뒤, useSelector라는 이름으로 커스텀.)
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () => {
  const store = configureStore({
    reducer,
    devTools: true,
  });
  initialRootState = store.getState();
  return store;
};

export const wrapper = createWrapper(initStore);

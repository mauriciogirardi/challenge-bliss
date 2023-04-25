import { Actions } from "easy-peasy";
import { State } from "easy-peasy";
import { action, Action } from "easy-peasy";

interface AuthModel {
  isAuth: boolean;
  setIsAuth: Action<AuthModel, string>;
}

export type StateAuthModel = State<{ storeAuthentication: AuthModel }>;
export type ActionsAuthModel = Actions<{ storeAuthentication: AuthModel }>;

export const storeAuthentication: AuthModel = {
  isAuth: false,

  setIsAuth: action((state, payload) => {
    state.isAuth = payload === "OK";
  }),
};

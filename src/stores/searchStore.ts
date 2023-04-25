import { Actions } from "easy-peasy";
import { State } from "easy-peasy";
import { action, Action } from "easy-peasy";

interface SearchModel {
  searchValue: string;
  setSearchValue: Action<SearchModel, string>;
}

export type StateSearchModel = State<{ searchStore: SearchModel }>;
export type ActionsSearchModel = Actions<{ searchStore: SearchModel }>;

export const searchStore: SearchModel = {
  searchValue: "",

  setSearchValue: action((state, payload) => {
    state.searchValue = payload;
  }),
};

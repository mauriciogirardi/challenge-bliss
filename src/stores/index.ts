import { createStore, persist } from "easy-peasy";
import { storeAuthentication } from "./storeAuthentication";
import { searchStore } from "./searchStore";

export const store = createStore({
  storeAuthentication: persist(storeAuthentication),
  searchStore,
});

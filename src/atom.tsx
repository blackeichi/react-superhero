import { atom } from "recoil";
const search = window.localStorage.getItem("search");
const parsedsearch = JSON.parse(search as any);

export const searchState = atom({
  key: "search",
  default: parsedsearch,
});

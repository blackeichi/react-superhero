import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { ICharacter, searchHero } from "./api";

export default function Search() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("keyword") as string;
  const { data: hero, isLoading } = useQuery<ICharacter>(
    ["searchs", "searchMovie"],
    () => searchHero(name)
  );
  console.log(hero);
  return null;
}

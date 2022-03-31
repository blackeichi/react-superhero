import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { IHeroComics, searchiComicsCharacter, searchiComicsName } from "./api";
import { imageMaking } from "./util";

export default function Comic() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("keyword") as string;
  console.log(name);
  const { data: searchComicname, isLoading: comicloading } =
    useQuery<IHeroComics>(["searchComicname", name], () =>
      searchiComicsName(name)
    );
  console.log(searchComicname);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link to="/marvel">
        <div
          style={{
            height: "70px",
            width: "150px",
            backgroundImage: `url(https://blog.zoombackground.io/media/posts/2/responsive/marvel-zoom-background-sm.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            margin: "30px 0",
          }}
        ></div>
      </Link>
      <h1 style={{ marginBottom: "30px", color: "white", fontSize: "20px" }}>
        Searching "{name}"
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {searchComicname?.data.results.map((comics) => (
          <div style={{ width: "400px", display: "flex", margin: "10px" }}>
            <div
              style={{
                width: "200px",
                height: "300px",
                backgroundImage: `url(${imageMaking(
                  comics.thumbnail.path,
                  comics.thumbnail.extension
                )})`,
                backgroundColor: "black",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              style={{
                width: "200px",
                color: "white",
                display: "flex",
                flexDirection: "column",
                marginLeft: "5px",
              }}
            >
              <span
                style={{
                  fontWeight: 800,
                  fontSize: "20px",
                  marginBottom: "25px",
                }}
              >
                {comics.title}
              </span>
              <span style={{ marginBottom: "5px" }}>
                On Sale Date : {comics.dates[0].date.substring(0, 4)}
              </span>
              <span style={{ marginBottom: "5px" }}>
                Page : {comics.pageCount}
              </span>
              <span style={{ marginBottom: "5px" }}>
                Price : {comics.prices[0].price}
              </span>
              <div>
                {comics.characters.available === 0 ? null : "Chractor : "}
                {comics.characters.items.map((heros) => (
                  <span>{heros?.name}</span>
                ))}
              </div>
              <span
                style={{
                  cursor: "pointer",
                  fontSize: "15px",
                  marginTop: "25px",
                }}
                onClick={() => window.open(`${comics.urls[0].url}`, "_blank")}
              >
                More Info 👉{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

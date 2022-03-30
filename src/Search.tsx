import { motion } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  ICharacter,
  IHeroComics,
  marvelHeroComics,
  marvelHeroDetail,
  searchHero,
} from "./api";
import { searchState } from "./atom";
import { imageMaking } from "./util";

const SearchCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchResult = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const SearchResults = styled.div`
  background-color: black;
  color: white;
  margin: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  text-align: center;
`;
const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
`;
const Detail = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.8);
  width: 70%;
  position: fixed;
  top: 5%;
  left: 50%;
  margin-left: -35%;
`;
const DetailImage = styled(motion.div)`
  width: 50%;
  height: 300px;
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const DetailInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 20px;
  font-family: "Roboto", sans-serif;
  color: white;
`;
const DetailComics = styled.div`
  display: flex;
  padding: 0 10px;
`;
const Comics = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;
const menulistShow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.3,
    },
  },
};
const offset2 = 5;
export default function Search() {
  const search = useRecoilValue(searchState);
  const heroId = useParams();
  const layoutid = String(heroId.Id);
  const location = useLocation();
  const [index2, setIndex2] = useState(0);
  const nextClick2 = () => {
    if (clickedHeroComics) {
      let maxIndex2: any;
      const totalMovies = (clickedHeroComics?.data.results).length - 1;
      maxIndex2 = Math.floor(totalMovies / offset2) - 1;
      if (maxIndex2 === -1) {
        setIndex2(0);
      } else {
        setIndex2((prev) => (prev === maxIndex2 ? 0 : prev + 1));
      }
    }
  };
  const prevClick2 = () => {
    if (clickedHeroComics) {
      const totalMovies = (clickedHeroComics?.data.results).length - 1;
      const maxIndex2 = Math.floor(totalMovies / offset2) - 1;
      if (maxIndex2 === -1) {
        setIndex2(0);
      } else {
        setIndex2((prev) => (prev === 0 ? maxIndex2 : prev - 1));
      }
    }
  };
  const navigate = useNavigate();
  const [detailOpen, setDetailOpen] = useState(false);
  const name = new URLSearchParams(location.search).get("keyword") as string;
  const { data: hero, isLoading } = useQuery<ICharacter>(
    ["searchs", "searchMovie"],
    () => searchHero(name)
  );

  const { data: clickedHero, isLoading: heroLoading } = useQuery<ICharacter>(
    ["clickedHero", layoutid],
    () => marvelHeroDetail(layoutid)
  );
  const { data: clickedHeroComics, isLoading: heroComicsLoading } =
    useQuery<IHeroComics>(["clickedHeroComics", layoutid], () =>
      marvelHeroComics(layoutid)
    );
  const onDetail = (id: number) => {
    navigate(`/search/${id}`);
    setDetailOpen(true);
  };
  const onOverlayClick = () => {
    navigate(`/search?keyword=${search}`);
    setDetailOpen(false);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <div
            style={{
              height: "70px",
              width: "150px",
              backgroundImage: `url(https://blog.zoombackground.io/media/posts/2/responsive/marvel-zoom-background-sm.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </Link>
        <SearchCover>
          {hero?.data.count === 0 ? (
            <h1 style={{ color: "white" }}>Sorry, Nothing Found...</h1>
          ) : (
            <h1 style={{ color: "white" }}>"{name}" 검색결과 </h1>
          )}

          <SearchResult>
            {hero?.data.results.map((hero) => (
              <SearchResults key={hero.id}>
                {isLoading ? (
                  <h1
                    style={{
                      width: "100%",
                      fontSize: "30px",
                      fontWeight: 700,
                      color: "white",
                      position: "absolute",
                      left: "10%",
                      top: "40%",
                    }}
                  >
                    Now Loading...
                  </h1>
                ) : (
                  <motion.div
                    layoutId={layoutid}
                    onClick={() => onDetail(hero.id)}
                    style={{
                      cursor: "pointer",
                      width: "250px",
                      height: "350px",
                      backgroundColor: "black",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundImage: `url(${imageMaking(
                        hero.thumbnail.path,
                        hero.thumbnail.extension
                      )})`,
                    }}
                  />
                )}

                <span style={{ margin: "20px 0", width: "90%" }}>
                  {hero.name}
                </span>
              </SearchResults>
            ))}
          </SearchResult>
        </SearchCover>
      </div>
      {detailOpen ? (
        <>
          <Overlay onClick={onOverlayClick}></Overlay>
          <Detail>
            {heroLoading ? (
              <h1
                style={{
                  width: "100%",
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "white",
                  position: "absolute",
                  left: "10%",
                  top: "40%",
                }}
              >
                Now Loading...
              </h1>
            ) : (
              <>
                {" "}
                <div style={{ display: "flex" }}>
                  <DetailImage
                    layoutId={layoutid}
                    style={{
                      backgroundImage: `url(${imageMaking(
                        String(clickedHero?.data.results[0].thumbnail.path),
                        clickedHero?.data.results[0].thumbnail.extension
                      )})`,
                    }}
                  ></DetailImage>
                  <DetailInfo>
                    <span style={{ fontSize: "25px" }}>
                      {clickedHero?.data.results[0].name}
                    </span>
                    {clickedHero?.data.results[0].description === "" ? (
                      <span style={{ fontSize: "13px", width: "85%" }}>
                        No description
                      </span>
                    ) : (
                      <span style={{ fontSize: "13px", width: "85%" }}>
                        Description -<br />
                        {clickedHero?.data.results[0].description}
                      </span>
                    )}
                    <motion.span
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        window.open(
                          `${clickedHero?.data.results[0].urls[0].url}`,
                          "_blank"
                        )
                      }
                      whileHover={{ scale: 1.1 }}
                    >
                      For more detail...
                    </motion.span>
                  </DetailInfo>
                </div>
                {heroComicsLoading ? (
                  <h1
                    style={{
                      width: "100%",
                      fontSize: "30px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    Now Loading...
                  </h1>
                ) : (
                  <>
                    {" "}
                    {clickedHeroComics?.data.count === 0 ? (
                      <h1
                        style={{
                          fontSize: "20px",
                          color: "white",
                          margin: "20px 10px 10px 10px",
                        }}
                      >
                        No Comics
                      </h1>
                    ) : (
                      <h1
                        style={{
                          fontSize: "20px",
                          color: "white",
                          margin: "20px 10px 10px 10px",
                        }}
                      >
                        Relevant Comics
                      </h1>
                    )}
                    <DetailComics>
                      {clickedHeroComics?.data.results
                        .slice(offset2 * index2, offset2 * index2 + offset2)
                        .map((comic) => (
                          <>
                            <Comics>
                              <div
                                style={{
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                                  width: "100px",
                                  height: "140px",
                                  backgroundImage: `url(${imageMaking(
                                    comic.thumbnail.path,
                                    comic.thumbnail.extension
                                  )})`,
                                }}
                              ></div>

                              <div
                                style={{
                                  color: "white",
                                  marginTop: "10px",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <span style={{ marginTop: "10px" }}>
                                  {comic.title}
                                </span>

                                <span
                                  style={{
                                    marginTop: "10px",
                                  }}
                                >
                                  {comic.dates[0].date.substring(0, 4)}
                                </span>
                                <motion.span
                                  style={{
                                    cursor: "pointer",
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                    transformOrigin: "center left top",
                                  }}
                                  onClick={() =>
                                    window.open(
                                      `${comic.urls[0].url}`,
                                      "_blank"
                                    )
                                  }
                                  whileHover={{ scale: 1.1 }}
                                >
                                  More info 👉
                                </motion.span>
                              </div>
                            </Comics>
                          </>
                        ))}
                    </DetailComics>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "30px",
                      }}
                    >
                      {" "}
                      <svg
                        style={{
                          cursor: "pointer",
                          width: "50px",
                          margin: "0 12px",
                        }}
                        onClick={prevClick2}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="white"
                          d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"
                        />
                      </svg>
                      <svg
                        style={{
                          cursor: "pointer",
                          width: "50px",
                          margin: "0 12px",
                        }}
                        onClick={nextClick2}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="white"
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </>
            )}
          </Detail>
        </>
      ) : null}
    </>
  );
}

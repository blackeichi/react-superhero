import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
//useHistory --> useNavigate로 교체됨
import styled from "styled-components";
import { ICharacter, marvelHero } from "./api";
import { imageMaking } from "./util";
const Header = styled.div`
  width: 100%;
  height: 40px;
  max-width: 1500px;
  display: flex;
  justify-content: right;
  div {
    height: 40px;
    width: 40px;
    font-size: 33px;
    font-weight: 900;
    color: white;
    background-color: black;
    text-justify: center;
    text-align: center;
    cursor: pointer;
  }
  svg {
    width: 100px;
    height: 40px;
  }
`;
const Category = styled(motion.div)`
  width: 100%;
  max-width: 1500px;
  height: 80vh;
  justify-self: center;
  display: flex;
  justify-content: center;
`;
const Hero = styled(motion.div)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)),
    url("https://getwallpapers.org/wp-content/uploads/2021/08/Spiderman-Background.jpg");
`;
const Menu = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  width: 600px;
  height: 1000px;
  transform: rotate(40deg);
  position: absolute;
  right: -200px;
  bottom: -300px;
`;
const Menulist = styled(motion.div)`
  color: white;
  font-family: "IBM Plex Sans Arabic", sans-serif;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  position: absolute;
  right: 50px;
  bottom: 150px;
  h1 {
    cursor: pointer;
  }
`;
const Cover = styled(motion.div)`
  background-color: #454140;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const HeaderBox = styled(motion.div)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
    url("https://947597.smushcdn.com/2554848/wp-content/uploads/2011/07/Marvel-Universe.jpg?lossy=0&strip=1&webp=1");
  height: 140px;
  svg {
    width: 40px;
    cursor: pointer;
    fill: white;
  }
  background-position: center;
  background-size: contain;
`;

const HeroBox = styled(motion.div)`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  font-family: "IBM Plex Sans Arabic", sans-serif;
`;
const HeroImg = styled(motion.div)`
  width: 100px;
  height: 120px;
  background-position: center;
  background-size: cover;
`;
const Noimage = styled(motion.div)`
  width: 100px;
  height: 120px;
  background-image: url("https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s900-c-k-c0x00ffffff-no-rj");
  background-position: center;
  background-size: cover;
`;
const HeroInfo = styled(motion.div)`
  width: 80%;
  max-width: 1400px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  span {
    width: 100%;
  }
`;
const Herodescription = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
`;
const Overlay = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
`;
const Detail = styled(motion.div)`
  background-color: white;
  width: 70%;
  height: 80%;
  position: relative;
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
const item = {
  hidden: { opacity: 0, x: 400 },
  show: { opacity: 1, x: 0 },
};
const offset = 5;

function Marvel() {
  const { data, isLoading } = useQuery<ICharacter>(
    ["marvel", "nowShowing"],
    marvelHero
  );
  console.log(data);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.floor(100 / offset) - 1;
  const nextClick = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };
  const prevClick = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };
  const [boxOpen, setBoxOpen] = useState(false);
  const toggleBox = () => {
    setBoxOpen((prev) => !prev);
  };
  const [detailOpen, setDetailOpen] = useState(false);
  const navigate = useNavigate();
  const onDetail = (id: number) => {
    navigate(`/marvel/${id}`);
    setDetailOpen(true);
  };
  const onOverlayClick = () => {
    navigate("/marvel");
    setDetailOpen(false);
  };
  const heroId = useParams();
  const layoutid = String(heroId.Id);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="1000px"
            height="402.473px"
            viewBox="-215.19 -86.608 1000 402.473"
            enableBackground="new -215.19 -86.608 1000 402.473"
            xmlSpace="preserve"
          >
            <g>
              <rect
                x="-215.19"
                y="-86.608"
                fill="#ED1D24"
                width="1000"
                height="402.473"
              />
              <g>
                <path
                  fill="#FFFFFF"
                  d="M631.063,7.184v-61.603H459.644l-28.191,205.803L403.557-54.418H341.74l6.925,54.915    c-7.14-14.068-32.449-54.915-88.146-54.915c-0.367-0.024-61.901,0-61.901,0l-0.237,299.974L153.324-54.418l-80.959-0.047    L25.753,256.349L25.777-54.42h-77.483l-27.933,174.585l-27.208-174.583h-77.508v337.906h61.036V120.618l27.764,162.866h32.449    l27.374-162.866v162.866H81.935l7.14-51.995h47.374l7.116,51.995l115.521,0.071h0.094v-0.071h0.072h0.072V173.799l14.162-2.063    l29.319,111.819h0.072h59.61h0.07l-0.024-0.071h0.106h0.072l-38.475-131.057c19.498-14.422,41.513-51.047,35.654-86.084V66.32    c0.07,0.474,36.316,217.38,36.316,217.38l71.065-0.216L515.83-22.8v306.285h115.236v-60.773h-54.7v-77.496h54.7V83.518h-54.7    V7.184H631.063z M96.265,177.905l16.758-144.461l17.4,144.461H96.265z M273.684,111.201c-4.697,2.278-9.595,3.417-14.363,3.417    V5.927c0.083,0,0.179-0.022,0.297-0.022c4.78-0.024,40.419,1.446,40.419,53.774C300.037,87.052,287.916,104.299,273.684,111.201     M754.044,222.665v60.772H641.63V-54.465h60.526v277.13H754.044z"
                />
              </g>
            </g>
          </svg>
          <Link to="/">
            <div>X</div>
          </Link>
        </Header>
        <Category>
          <Hero>
            <Menu></Menu>
            <Menulist>
              <motion.h1
                style={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Comics
              </motion.h1>
              <motion.h1
                style={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={toggleBox}
              >
                Charaters
              </motion.h1>
            </Menulist>
          </Hero>
        </Category>
        {boxOpen ? (
          <>
            <Cover>
              <HeaderBox>
                <svg
                  onClick={prevClick}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z" />
                </svg>
                <svg
                  onClick={nextClick}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                </svg>
                <svg
                  onClick={toggleBox}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                </svg>
              </HeaderBox>
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
                  style={{ x: 400, opacity: 0 }}
                  variants={menulistShow}
                  initial="hidden"
                  animate="show"
                >
                  {data?.data.results
                    .slice(offset * index, offset * index + offset)
                    .map((Heee) => (
                      <>
                        <HeroBox
                          variants={item}
                          key={Heee.id}
                          layoutId={Heee.id + ""}
                          transition={{ duration: 0.3 }}
                        >
                          {Heee.thumbnail.path ===
                          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                            <Noimage
                              onClick={() => onDetail(Heee.id)}
                              style={{ cursor: "pointer" }}
                            />
                          ) : (
                            <HeroImg
                              onClick={() => onDetail(Heee.id)}
                              style={{
                                cursor: "pointer",
                                backgroundImage: `url(${imageMaking(
                                  Heee.thumbnail.path,
                                  Heee.thumbnail.extension
                                )})`,
                              }}
                            />
                          )}
                          <HeroInfo>
                            <span
                              onClick={() => onDetail(Heee.id)}
                              style={{
                                cursor: "pointer",
                                fontWeight: 800,
                                fontSize: "25px",
                                marginBottom: "30px",
                              }}
                            >
                              {Heee.name}
                            </span>
                            {Heee.description === "" ? (
                              <Herodescription>No description</Herodescription>
                            ) : (
                              <Herodescription>
                                {Heee.description}
                              </Herodescription>
                            )}
                          </HeroInfo>
                        </HeroBox>
                      </>
                    ))}
                </motion.div>
              )}
            </Cover>
            {detailOpen ? (
              <Overlay onClick={onOverlayClick}>
                <Detail layoutId={layoutid}></Detail>
              </Overlay>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
}
export default Marvel;

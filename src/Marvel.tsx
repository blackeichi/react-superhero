import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link, useNavigate } from "react-router-dom";
//useHistory --> useNavigate로 교체됨
import styled from "styled-components";

const Header = styled.div`
  width: 80%;
  height: 40px;
  min-width: 1000px;
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
const Heros = styled(motion.div)`
  width: 80%;
  min-width: 1000px;
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Hero = styled(motion.div)`
  width: 20%;
  min-width: 250px;
  height: 60vh;
  background-position: center;
  background-size: cover;
  position: relative;
  cursor: pointer;
  div {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
const heroname = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};
const heroHover = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 1,
    scale: 1.1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

function Marvel() {
  const [heroId, setHeroId] = useState();
  const history = useNavigate();
  const onBoxopen = (id: number) => {
    history(`/marvel/${id}`);
  };
  const boxOpenMatch = useLocation();
  console.log(boxOpenMatch);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "140vh",
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
        <Heros>
          <Hero
            onClick={() => onBoxopen(346)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201805/15/21/f0041321_5afaeddcd6541.jpg")`,
            }}
          >
            <motion.div variants={heroname}>
              {
                //부모요소에서 whileHover를 설정했으므로 variants만 넣어도 whilHover 적용
              }
              <h1>Iron Man</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(149)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("http://image.cine21.com/resize/cine21/still/2018/1121/19_06_16__5bf52e186f884[W578-].jpg")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Captain America</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(620)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://phoneky.co.uk/thumbs/wallpapers/p2/movies/28/cdedf98b12839312.jpg")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Spider Man</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(226)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://mblogthumb-phinf.pstatic.net/MjAxNjExMTJfMjAz/MDAxNDc4OTMzMzY2MTk0.haxopsWCUANUUvMDG5s4EpaA2idmgPoll5A9vpHh7xUg.yo5vwgmO27kN3ULKlbvO8-ErU-Sk9q31mZKOF7oA4E0g.JPEG.naminng/Benedict-Cumberbatch-Doctor-Strange-HD-Wallpaper-05528.jpg?type=w2")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Doctor Strange</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(332)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/1018/932/961/hulk-hulk-film-muscles-superhero-marvel-cinematic-universe-hd-wallpaper-preview.jpg")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Hulk</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(313)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://www.wallpaperuse.com/wallp/58-583317_m.jpg")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Hawk Eye</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(107)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://prodigits.co.uk/thumbs/wallpapers/p2/misc/44/93746a6912251164.jpg")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Black widow</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(106)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F99FF1F475AE1F4751CD7C4")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Black Panther</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(659)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://www.wallpapertip.com/wmimgs/35-354165_fondos-de-pantalla-hd-thor.jpg")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Thor</h1>
            </motion.div>
          </Hero>
          <Hero
            onClick={() => onBoxopen(579)}
            variants={heroHover}
            whileHover="hover"
            initial="normal"
            style={{
              backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/576/183/656/marvel-cinematic-universe-marvel-comics-cleavage-scarlet-witch-vision-hd-wallpaper-preview.jpg")`,
            }}
          >
            {" "}
            <motion.div variants={heroname}>
              <h1>Scarlet Witch</h1>
            </motion.div>
          </Hero>
        </Heros>
      </div>
    </>
  );
}
export default Marvel;

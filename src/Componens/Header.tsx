import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Title = styled.div`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJkVng%2FbtqEbu4DBHR%2FKgtuh3N3RrcHMKtezt8T01%2Fimg.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 70px;
    height: 50px;
    margin: 0 10px;
  }
  h1 {
    font-family: "IBM Plex Sans Arabic", sans-serif;
    font-size: 10px;
    color: white;
    text-shadow: 0 10px 3px black;
  }
`;
const Nav = styled.div``;

const svg = {
  start: { pathLength: 0, fill: "rgba(0,0,0,0)" },
  end: {
    pathLength: 1,
    fill: "#FFFFFF",
  },
  end2: {
    pathLength: 1,
    fill: "#ED1D24",
  },
  end3: {
    pathLength: 1,
    fill: "#0376F2",
  },
};

function Header() {
  return (
    <Title>
      <div>
        {" "}
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
          enable-background="new -215.19 -86.608 1000 402.473"
          xmlSpace="preserve"
        >
          <g>
            <motion.rect
              initial="start"
              animate="end2"
              transition={{ duration: 3 }}
              variants={svg}
              x="-215.19"
              y="-86.608"
              fill="#ED1D24"
              width="1000"
              height="402.473"
            />
            <g>
              <motion.path
                initial="start"
                animate="end"
                transition={{ duration: 3 }}
                variants={svg}
                fill="#FFFFFF"
                d="M631.063,7.184v-61.603H459.644l-28.191,205.803L403.557-54.418H341.74l6.925,54.915    c-7.14-14.068-32.449-54.915-88.146-54.915c-0.367-0.024-61.901,0-61.901,0l-0.237,299.974L153.324-54.418l-80.959-0.047    L25.753,256.349L25.777-54.42h-77.483l-27.933,174.585l-27.208-174.583h-77.508v337.906h61.036V120.618l27.764,162.866h32.449    l27.374-162.866v162.866H81.935l7.14-51.995h47.374l7.116,51.995l115.521,0.071h0.094v-0.071h0.072h0.072V173.799l14.162-2.063    l29.319,111.819h0.072h59.61h0.07l-0.024-0.071h0.106h0.072l-38.475-131.057c19.498-14.422,41.513-51.047,35.654-86.084V66.32    c0.07,0.474,36.316,217.38,36.316,217.38l71.065-0.216L515.83-22.8v306.285h115.236v-60.773h-54.7v-77.496h54.7V83.518h-54.7    V7.184H631.063z M96.265,177.905l16.758-144.461l17.4,144.461H96.265z M273.684,111.201c-4.697,2.278-9.595,3.417-14.363,3.417    V5.927c0.083,0,0.179-0.022,0.297-0.022c4.78-0.024,40.419,1.446,40.419,53.774C300.037,87.052,287.916,104.299,273.684,111.201     M754.044,222.665v60.772H641.63V-54.465h60.526v277.13H754.044z"
              />
            </g>
          </g>
        </svg>
        <svg
          style={{ width: "50px" }}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="900.14px"
          height="900.141px"
          viewBox="0 0 900.14 900.141"
          enable-background="new 0 0 900.14 900.141"
          xmlSpace="preserve"
        >
          <motion.path
            initial="start"
            animate="end3"
            transition={{ duration: 3 }}
            variants={svg}
            fill="#0376F2"
            d="M450.069,0C201.503,0,0,201.503,0,450.071s201.503,450.07,450.069,450.07  c248.568,0,450.071-201.503,450.071-450.07S698.637,0,450.069,0z M33.109,450.071c0-48.351,8.128-95.443,24.204-140.321  l43.292,30.07v337.863c-13.458-20.62-25.057-42.439-34.743-65.328C44.137,560.971,33.109,506.372,33.109,450.071z M744.906,744.908  c-38.301,38.299-82.896,68.369-132.543,89.37c-51.384,21.736-105.984,32.753-162.293,32.753c-56.299,0-110.9-11.017-162.282-32.753  c-49.656-21.001-94.244-51.071-132.552-89.37c-12.079-12.089-23.34-24.795-33.757-38.094h230.427l90.743-65.694V283.555  l-90.743-67.571H104.923c14.725-21.659,31.534-41.959,50.313-60.747c38.308-38.309,82.896-68.378,132.552-89.373  c51.382-21.736,105.983-32.753,162.282-32.753c56.309,0,110.91,11.017,162.293,32.753c49.646,20.995,94.242,51.064,132.543,89.373  c18.788,18.787,35.586,39.088,50.312,60.747h-65.882l-14.8,32.679l-43.988-32.679h-102.34l-90.088,67.571V641.12l89.665,65.694  h210.888C768.256,720.113,756.992,732.819,744.906,744.908z M192.605,328.332h82.409c23.058,0,41.743,18.684,41.743,41.742v184.78  c0,23.05-18.685,41.741-41.743,41.741h-49.44V352.225L192.605,328.332z M810.533,659.841V532.432H693.907v64.163h-50.376  c-22.037,0-39.896-17.857-39.896-39.893v-204.43l-32.989-23.94h123.261v70.037h106.904l21.265-136.866  c4.355,8.586,8.43,17.352,12.2,26.275c21.736,51.383,32.756,105.983,32.756,162.292c0,56.301-11.02,110.9-32.756,162.284  C827.342,628.75,819.42,644.592,810.533,659.841z"
          />
        </svg>
      </div>

      <h1>SUPER HERO</h1>
    </Title>
  );
}
export default Header;

import { motion } from "framer-motion";
import styled from "styled-components";

const Heros = styled.div`
  width: 80%;
  min-width: 1000px;
  justify-self: center;
  background-color: tomato;
  margin-left: 10%;
  display: flex;
  flex-wrap: wrap;
`;
const Hero = styled.div`
  width: 20vw;
  min-width: 250px;
  height: 60vh;
  background-position: center;
  background-size: cover;
`;

function Marvel() {
  return (
    <>
      <div></div>
      <Heros>
        <Hero
          style={{
            backgroundImage: `url("http://thumbnail.egloos.net/600x0/http://pds21.egloos.com/pds/201805/15/21/f0041321_5afaeddcd6541.jpg")`,
          }}
        ></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
      </Heros>
    </>
  );
}
export default Marvel;

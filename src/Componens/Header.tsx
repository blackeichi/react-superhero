import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Title = styled.div`
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJkVng%2FbtqEbu4DBHR%2FKgtuh3N3RrcHMKtezt8T01%2Fimg.jpg");
  background-size: cover;
  background-position: center;
`;

function Header() {
  return <Title />;
}
export default Header;

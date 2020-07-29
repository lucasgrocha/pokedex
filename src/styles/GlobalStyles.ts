import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.jpg";

export default createGlobalStyle`
  body, html {
  height: 100vh;
}

  body {
    background: url(${Background}) no-repeat center center fixed;
    height: 100%;
  }
`;

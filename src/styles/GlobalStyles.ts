import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Montserrat";
    list-style: none;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  html {
    /* @media (max-width: 768px) {
      font-size: 40%;
    } */
  }

  body, input, button, select {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

  .safe-area {
    max-width: 1130px;
    margin: auto;
    @media(max-width: 1130px){
      max-width: 910px;
    }

    @media(max-width: 1000px){
        padding: 0 2rem;
    }
  }

  .above {
    :hover {
      transition: .2s transform ease-in-out;
      transform: translateY(-3px);
    }
  }
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.primary.black};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }
`;
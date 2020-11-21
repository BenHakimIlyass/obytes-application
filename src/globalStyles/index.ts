import { createGlobalStyle, css } from "@xstyled/styled-components";
export { default as theme } from "./themeDependencies";
export const GlobalStyle = createGlobalStyle(css`
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/Inter/Inter-Regular.woff?v=3.12") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url("/Inter/Inter-Italic.woff?v=3.12") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url("/Inter/Inter-SemiBold.woff?v=3.12") format("woff");
  }

  @font-face {
    font-family: "Inter";
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url("/Inter/Inter-SemiBoldItalic.woff?v=3.12") format("woff");
  }

  body {
    margin: 0;
    background-color: white;
    overflow-x: hidden;
    height: fit-content;
  }
  body::-webkit-scrollbar {
    width: 6px;
  }
  body::-webkit-scrollbar-track {
    box-shadow: 0px 0px 40px rgba(1, 5, 10, 0.57);
  }

  body::-webkit-scrollbar-thumb {
    background-color: #ff6f01;
    outline: 1px solid transparent;
  }
  body::-webkit-scrollbar-track {
    background-color: #fff;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  * {
    scroll-behavior: smooth;
    ::selection {
      background-color: #fec498;
    }
  }
  html {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  }
  img {
    pointer-events: none;
  }
`);

import { createGlobalStyle } from "styled-components";
import { BREAKPOINTS, COMMON } from "./abstracts/_variables";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #000000;

    --gray-300: #B7B7C0;
    --gray-600: #4B4B62;

    --red-100: #E5A8A8;
    --red-400: #AA1F18;
    --red-500: #C81818;
    --red-600: #D91C1C;

    --green-100: #CEEBD8;
    --green-400: #109E41;
    --green-600: #5BCA00;

    --blue-100: #D1E8FF;
    --blue-200: #3bb9e3;
    --blue-300: #4286d4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
  }

  button, a {
    cursor: pointer;
  }

  body, input, textarea, select, button {
    font: 400 ${COMMON.FONT_SIZE_BASE} "Roboto", sans-serif;
    color: var(--gray-600);
    line-height: 16px;
  }


  @media (max-width: ${BREAKPOINTS.xl}) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: ${BREAKPOINTS.lg}) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: ${BREAKPOINTS.md}) {
    html {
      font-size: 82.25%;
    }
  }

  /** default scrollbar */
::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--gray-300);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--gray-600);
}
`;

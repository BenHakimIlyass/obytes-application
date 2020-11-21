import { ThemeProvider, ColorModeProvider, useColorMode } from "@xstyled/styled-components";

import { Nav } from "@components";
import { GlobalStyle, theme } from "../globalStyles";
import { useFavicons } from "@hooks";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <div>
          <header>
            <Nav />
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

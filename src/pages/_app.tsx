import { ThemeProvider } from "@xstyled/styled-components";

import { Nav } from "@components";
import { GlobalStyle, theme } from "../globalStyles";

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

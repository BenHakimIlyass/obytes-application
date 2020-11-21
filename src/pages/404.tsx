import * as React from "react";
import Head from "next/head";
import { breakpoints } from "@utils";
import { Footer, Vstack } from "@components";
import styled from "@xstyled/styled-components";

const Error = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - 404 sorry! You've lost your way</title>
      </Head>

      <MainPlayground space={6}>
        <H3>Seems like this page isn't available 404</H3>
        <Footer />
      </MainPlayground>
    </>
  );
};
// Chnage the y value in MainPlayground 920 breakpoint by md
const MainPlayground = styled(Vstack)`
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,24vh,0)` },
    920: `transform: translate3d(0,40vh,0);`,
  })}
`;
const H3 = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  span {
    font-weight: 500;
  }
`;
export default Error;

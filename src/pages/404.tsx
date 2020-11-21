import * as React from "react";
import Head from "next/head";
import { breakpoints } from "@utils";
import { Vstack } from "@components";
import styled from "@xstyled/styled-components";

const Blog = () => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - 404 sorry! You've got lost</title>
      </Head>

      <MainPlayground space={3}>404</MainPlayground>
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

export default Blog;

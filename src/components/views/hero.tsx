import React from "react";
import { Vstack, Title, Button } from "@components";
import styled, { breakpoints, css } from "@xstyled/styled-components";

const Hero = () => {
  return (
    <HeroHolder>
      <Vstack space={2}>
        <Vstack space={1}>
          <Title>Hello</Title>
          <H1>Obytes</H1>
        </Vstack>
        <P style={{ maxWidth: 500, lineHeight: "30px" }}>
          I’m Ilyass Ben Hakim, and I’m a software engineer, self-taught frontend developer and UI UX designer.
        </P>
        <Button>
          My<span> portfolio</span>
        </Button>
      </Vstack>
    </HeroHolder>
  );
};
const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

const P = styled.p`
  font-size: 17px;
  font-weight: 400;
  span {
    font-weight: 500;
  }
`;
const HeroHolder = styled.div`
  ${breakpoints({
    lg: css`
      max-width: 500px;
      margin-left: 200px;
    `,
  })}
`;
export default Hero;

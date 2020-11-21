import React from "react";
import styled, { useUp } from "@xstyled/styled-components";
import { Hstack, Container } from "@components";
const Nav = () => {
  return (
    <div>
      <Container>
        <P style={{ paddingTop: 20 }}>.ily</P>
      </Container>
      <div style={{ zIndex: 999, position: "absolute", top: 0, right: 0 }}>
        <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="67" height="67" fill="white" />
          <line x1="29" y1="26.5" x2="46" y2="26.5" stroke="#00002E" stroke-width="3" />
          <line x1="22" y1="36.5" x2="46" y2="36.5" stroke="#00002E" stroke-width="3" />
        </svg>
      </div>
    </div>
  );
};
const P = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
export default Nav;

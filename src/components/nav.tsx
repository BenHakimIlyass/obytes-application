import React from "react";
import styled from "@xstyled/styled-components";
import { Container } from "@components";
import { useHover } from "@hooks";
import Link from "next/link";
import { motion } from "framer-motion";

const Nav = () => {
  const [events, state] = useHover();
  return (
    <Link href="/">
      <>
        <Container>
          <P style={{ paddingTop: 20 }} {...events}>
            .ily<motion.span animate={{ opacity: state ? 1 : 0 }}>ass</motion.span>
          </P>
        </Container>
        <div style={{ zIndex: 999, position: "absolute", top: 0, right: 0 }}>
          <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="67" height="67" fill="white" />
            <line x1="29" y1="26.5" x2="46" y2="26.5" stroke="#00002E" stroke-width="3" />
            <line x1="22" y1="36.5" x2="46" y2="36.5" stroke="#00002E" stroke-width="3" />
          </svg>
        </div>
      </>
    </Link>
  );
};
const P = styled.p`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
`;
export default Nav;

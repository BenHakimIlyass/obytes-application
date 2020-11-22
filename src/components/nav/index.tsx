import React from "react";
import styled from "@xstyled/styled-components";
import { Container } from "@components";
import { useHover } from "@hooks";
import Link from "next/link";
import { motion } from "framer-motion";
import useHeadroom from "react-useheadroom";
import Modal from "./modal";
const Nav = () => {
  const [menuState, set] = React.useState(false);
  const [events, state] = useHover();
  const isPinned = useHeadroom({});
  return (
    <div
      style={{
        overflowX: "hidden",
        width: "100wh",
        zIndex: 999,
      }}
    >
      <Modal menuState={menuState} />
      <Navbar style={{ transform: isPinned ? `translate3d(0,0px,0)` : `translate3d(0,-100px,0)` }}>
        <Container>
          <Link href="/">
            <Logo animate={{ y: isPinned ? 0 : -20 }} {...events}>
              .ily<motion.span animate={{ opacity: state ? 1 : 0 }}>ass</motion.span>
            </Logo>
          </Link>
        </Container>

        <button
          style={{ zIndex: 999, position: "absolute", top: 0, right: 0, cursor: "pointer" }}
          onClick={() => set((prev) => !prev)}
        >
          <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="67" height="67" fill="white" />
            <motion.line
              initial={{ opacity: 0 }}
              animate={{ opacity: menuState ? 0 : 1 }}
              x1="29"
              y1="26.5"
              x2="46"
              y2="26.5"
              stroke="#00002E"
              strokeWidth="3"
            />
            <line x1="22" y1="36.5" x2="46" y2="36.5" stroke="#00002E" strokeWidth="3" />
          </svg>
        </button>
      </Navbar>
    </div>
  );
};

const Logo = styled.p`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  padding-top: 20px;
`;

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  transition: all 0.4s;
`;

export default Nav;

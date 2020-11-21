import React from "react";
import styled from "@xstyled/styled-components";
import { Container, IconicButton, Vstack, Center, Title, Hstack } from "@components";
import { useHover } from "@hooks";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [menuState, set] = React.useState(false);
  const [events, state] = useHover();
  return (
    <Link href="/">
      <>
        <Container>
          <Logo style={{ paddingTop: 20 }} {...events}>
            .ily<motion.span animate={{ opacity: state ? 1 : 0 }}>ass</motion.span>
          </Logo>
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
            <line x1="22" y1="36.5" x2="46" y2="36.5" stroke="#00002E" stroke-width="3" />
          </svg>
        </button>
        <AnimatePresence exitBeforeEnter>
          {menuState ? (
            <Menu initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}>
              <Vstack space={4}>
                <Title>Find me on</Title>
                <Vstack space={2}>
                  {/* twitter */}
                  <Hstack justifyContent="space-around" alignItems="center">
                    <IconicButton color="#fff" bgcolor="#1a92dc" title="Twitter">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23 3.00001C22.0424 3.67549 20.9821 4.19212 19.86 4.53001C18.6264 3.11155 16.6384 2.61412 14.8821 3.28446C13.1258 3.9548 11.9748 5.65031 12 7.53001V8.53001C8.43066 8.62256 5.05203 6.92198 3 4.00001C3 4.00001 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.50001C20.9991 7.22146 20.9723 6.9436 20.92 6.67001C21.9406 5.6635 22.6608 4.39272 23 3.00001Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </IconicButton>
                    <P>As @dinasso1</P>
                  </Hstack>

                  {/* dribbble */}
                  <Hstack justifyContent="space-around" alignItems="center">
                    <P>As /ilyassbh</P>
                    <IconicButton color="#fff" bgcolor="#ea4c89" title="Dribbble">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM20.8678 13.5458C18.9343 13.0966 17.1266 12.981 15.4388 13.2017C16.2798 15.2769 16.892 17.3073 17.2746 19.2932C19.1353 17.9452 20.4598 15.9025 20.8678 13.5458ZM15.4278 20.3242C15.0688 18.1639 14.4112 15.9334 13.4539 13.6332C10.7665 14.4645 8.41445 16.2568 6.37025 19.0222C7.91178 20.2597 9.86943 21 12 21C13.2137 21 14.3713 20.7597 15.4278 20.3242ZM4.94537 17.5892C7.15165 14.6878 9.72193 12.7533 12.6326 11.7959C12.4449 11.4028 12.2487 11.0076 12.044 10.6105C11.5271 10.7486 10.9913 10.8678 10.4373 10.9691C8.20661 11.3769 6.2731 11.4563 3.13698 11.4115C3.09583 11.4109 3.05656 11.4103 3.01904 11.4098C3.00641 11.6049 3 11.8017 3 12C3 14.1119 3.72742 16.0539 4.94537 17.5892ZM3.3769 9.41451C4.09049 7.03114 5.76522 5.06297 7.9511 3.96001C9.11789 5.60237 10.1533 7.21462 11.0576 8.79662C10.7397 8.87209 10.413 8.94037 10.0776 9.00167C8.05998 9.37052 6.26498 9.451 3.3769 9.41451ZM9.89553 3.24738C11.0661 4.92295 12.1064 6.57259 13.016 8.19642C14.9327 7.4552 16.4205 6.35363 17.4343 4.82525C15.9243 3.67974 14.0415 3 12 3C11.2753 3 10.5706 3.08565 9.89553 3.24738ZM18.9011 6.22255C20.1159 7.67214 20.8825 9.51014 20.9876 11.5233C18.7255 11.0358 16.5982 10.9638 14.6121 11.3045C14.4063 10.8628 14.1904 10.4192 13.9645 9.97357C16.0254 9.13959 17.694 7.91484 18.9011 6.22255Z"
                          fill="white"
                        />
                      </svg>
                    </IconicButton>
                  </Hstack>
                </Vstack>
              </Vstack>
            </Menu>
          ) : null}
        </AnimatePresence>
      </>
    </Link>
  );
};

const Logo = styled.p`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
`;
const P = styled.p`
  font-size: 17px;
  font-weight: 400;
`;

const Menu = styled(motion.div)`
  width: 300px;
  height: fit-content;
  right: 0px;
  top: 80px;
  z-index: 900;
  background-color: #fff;
  padding: 32px;
  position: absolute;
  box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.05);
`;
export default Nav;

import * as React from "react";
import Head from "next/head";
import { breakpoints } from "../utils";
import styled from "@xstyled/styled-components";
import { Hstack, Vstack, Hero, Button, Container, Center, FloatingImages, Footer } from "@components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - Obytes job inquiry</title>
      </Head>

      {/* Main sections */}
      <MainPlayground>
        <Hstack>
          <Container>
            <Vstack space={16}>
              {/* hero section */}
              <Hero />

              {/* more about me*/}
              <div>
                <Vstack space={2}>
                  <Vstack space={7}>
                    <H1 style={{ textAlign: "center" }}>More about me</H1>
                    <Vstack space={7}>
                      {/* what i do */}
                      <Vstack space={2}>
                        <H3 style={{ textAlign: "center" }}>
                          What I <span>do?</span>
                        </H3>
                        <Center>
                          <P style={{ maxWidth: 480, lineHeight: "30px", textAlign: "center" }}>
                            Based in a small and beautiful city called Tetouan, I make software applications that
                            respect the standards of optimization, SEO, and good looking UI.
                          </P>
                        </Center>
                      </Vstack>

                      {/* my education */}
                      <Vstack space={2}>
                        <H3 style={{ textAlign: "center" }}>
                          My <span>education</span>
                        </H3>
                        <Center>
                          <P style={{ maxWidth: 480, lineHeight: "30px", textAlign: "center" }}>
                            By the end of 2019, I’ve got my computer science professional degree, and this year I’ve
                            been working on my software engineering master’s degree.
                          </P>
                        </Center>
                      </Vstack>

                      {/* Job at obytes */}
                      <Vstack space={2}>
                        <H3 style={{ textAlign: "center" }}>
                          Job at<span> Obytes</span>
                        </H3>
                        <Center>
                          <P style={{ maxWidth: 480, lineHeight: "30px", textAlign: "center" }}>
                            I understand the value of being a team member and for that, I think I would be a good fit
                            for this position (ReactJS developer), as well as I would love to express my interest in
                            being part of <span>Obytes</span> by taking an interview with you.
                          </P>
                        </Center>
                      </Vstack>
                    </Vstack>
                  </Vstack>
                </Vstack>
              </div>

              {/* Need more infos.? */}
              <div>
                <Vstack space={12}>
                  <H1 style={{ textAlign: "center" }}>Need more infos.?</H1>
                  <Vstack space={2}>
                    <P style={{ lineHeight: "30px", textAlign: "center" }}>
                      I'll be always looking for new challenges, so please feel free to contact me.
                    </P>

                    <Center>
                      <Button to="https://ilyassbh.me">
                        My <span>portfolio</span>
                      </Button>
                    </Center>
                  </Vstack>
                </Vstack>
              </div>
              <Footer />
            </Vstack>
          </Container>
        </Hstack>
      </MainPlayground>
      {/* hero image */}
      <FloatingImages />
    </>
  );
};

const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;
const H3 = styled.h1`
  font-size: 20px;
  font-weight: 400;
  span {
    font-weight: 500;
  }
`;
const P = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: #2b2b2b;
  span {
    font-weight: 500;
  }
`;

const MainPlayground = styled.div`
  z-index: 800;
  ${breakpoints({
    0: { transform: `translate3d(0,24vh,0)` },
    920: `transform: translate3d(0,24vh,0);`,
  })}
  margin-bottom: 100px;
`;

export default HomePage;

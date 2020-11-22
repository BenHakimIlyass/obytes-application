import styled from "@xstyled/styled-components";
import { Hstack } from "@components";
import { motion } from "framer-motion";
import { useHover } from "@hooks";

const Button = ({ to, children }) => {
  const [events, state] = useHover();
  return (
    <a href={to} style={{ cursor: "pointer", textDecoration: "underline" }} {...events}>
      <Hstack alignItems="center" space={1}>
        <P>{children}</P>
        <motion.div animate={{ x: state ? 8 : 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 6L20 12L14 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </Hstack>
    </a>
  );
};
const P = styled.p`
  font-size: 17px;
  font-weight: 400;
  span {
    font-weight: 500;
  }
`;

export default Button;

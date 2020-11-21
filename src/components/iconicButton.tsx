import styled from "@xstyled/styled-components";
import { Hstack } from "@components";
import { motion } from "framer-motion";

const IconicButton = ({ title, bgcolor = "#000", color = "#fff", children }) => {
  return (
    <Thumbnail style={{ backgroundColor: bgcolor, color }} whileHover={{ y: -8 }}>
      <Hstack alignItems="center" space={1}>
        <P>{title}</P>
        {children}
      </Hstack>
    </Thumbnail>
  );
};
const Thumbnail = styled(motion.button)`
  border-radius: 8px;
  height: 44px;
  border: none;
  width: fit-content;
  padding: 8px 16px;
  cursor: pointer;
`;
const P = styled.p`
  font-size: 17px;
  font-weight: 500;
  span {
    font-weight: 500;
  }
`;

export default IconicButton;

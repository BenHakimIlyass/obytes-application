import styled from "@xstyled/styled-components";
import { Hstack } from "@components";
import { motion } from "framer-motion";

const IconicButton = ({
  title,
  bgcolor = "#000",
  color = "#fff",
  children,
  isCentered = false,
  style = {},
  ...props
}) => {
  return (
    <a {...props} target="_blanc">
      <Thumbnail style={{ backgroundColor: bgcolor, color, ...style }} whileHover={{ y: -6 }}>
        <Hstack alignItems="center" space={1} justifyContent={isCentered ? "center" : "flex-start"}>
          <P>{title}</P>
          {children}
        </Hstack>
      </Thumbnail>
    </a>
  );
};
const Thumbnail = styled(motion.button)`
  height: 44px;
  width: 100%;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white !important;
  }
`;
const P = styled.p`
  font-size: 17px;
  font-weight: 500;
  span {
    font-weight: 500;
  }
`;

export default IconicButton;

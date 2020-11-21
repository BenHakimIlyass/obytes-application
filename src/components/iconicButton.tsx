import styled from "@xstyled/styled-components";
import { Hstack } from "@components";
const IconicButton = ({ title, bgcolor = "#000", color = "#fff", children }) => {
  return (
    <Thumbnail style={{ backgroundColor: bgcolor, color }}>
      <Hstack alignItems="center" space={1}>
        <P>{title}</P>
        {children}
      </Hstack>
    </Thumbnail>
  );
};
const Thumbnail = styled.button`
  border-radius: 8px;
  height: 44px;
  border: none;
  width: fit-content;
  padding: 8px 16px;
`;
const P = styled.p`
  font-size: 17px;
  font-weight: 500;
  span {
    font-weight: 500;
  }
`;

export default IconicButton;

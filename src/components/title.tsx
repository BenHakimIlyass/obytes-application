import styled from "@xstyled/styled-components";
import { Hstack } from "@components";

const Title = ({ children }) => {
  return (
    <Hstack alignItems="center" space={1 / 2}>
      <div style={{ width: 12, height: 1, backgroundColor: "#000" }} />
      <P>{children}</P>
    </Hstack>
  );
};
const P = styled.p`
  font-size: 17px;
  font-weight: 400;
`;

export default Title;

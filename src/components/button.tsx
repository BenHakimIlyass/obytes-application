import styled from "@xstyled/styled-components";
import { Hstack } from "@components";
const Button = ({ children }) => {
  return (
    <Hstack alignItems="center" space={1}>
      <P>{children}</P>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 6L20 12L14 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </Hstack>
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

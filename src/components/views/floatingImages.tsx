import HeroImage from "../../../public/hero-img.svg";
import styled, { breakpoints, css, useUp } from "@xstyled/styled-components";

const FloatingImages = () => {
  const isUpLg = useUp("lg");
  return (
    <>
      <FloatingImagePlayground style={{ position: "absolute", top: 0, right: 0 }}>
        {isUpLg ? <HeroImage /> : null}
      </FloatingImagePlayground>
      <FloatingImagePlayground top="70%" left={{ xs: -140, md: 0 }}>
        <svg width="235" height="1009" viewBox="0 0 235 1009" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M-279.5 949C-56.1008 949 125 767.899 125 544.5C125 321.101 -56.1008 140 -279.5 140C-502.899 140 -684 321.101 -684 544.5C-684 767.899 -502.899 949 -279.5 949Z"
            stroke="#FF6F01"
            strokeWidth="120"
          />
          <path
            opacity="0.4"
            d="M-259.5 949C-36.1008 949 145 767.899 145 544.5C145 321.101 -36.1008 140 -259.5 140C-482.899 140 -664 321.101 -664 544.5C-664 767.899 -482.899 949 -259.5 949Z"
            stroke="#FF9000"
            strokeWidth="120"
          />
          <path
            d="M-229.5 869C-6.10083 869 175 687.899 175 464.5C175 241.101 -6.10083 60 -229.5 60C-452.899 60 -634 241.101 -634 464.5C-634 687.899 -452.899 869 -229.5 869Z"
            stroke="#FF9000"
            strokeWidth="120"
          />
        </svg>
      </FloatingImagePlayground>
      <FloatingImagePlayground top="160%" right={{ xs: -140, md: 0 }}>
        <svg width="369" height="1068" viewBox="0 0 369 1068" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M303.441 292.761C188.698 407.504 188.698 593.539 303.441 708.282C418.184 823.025 604.219 823.025 718.962 708.282C833.705 593.539 833.705 407.504 718.962 292.761C604.219 178.018 418.184 178.018 303.441 292.761Z"
            stroke="#FF6F01"
            strokeWidth="120"
          />
          <path
            opacity="0.4"
            d="M293.167 303.033C178.424 417.776 178.424 603.812 293.167 718.555C407.91 833.298 593.946 833.298 708.689 718.555C823.432 603.812 823.432 417.776 708.689 303.033C593.946 188.29 407.91 188.29 293.167 303.033Z"
            stroke="#FF9000"
            strokeWidth="120"
          />
          <path
            d="M318.849 359.532C204.106 474.275 204.106 660.31 318.849 775.053C433.592 889.796 619.627 889.796 734.37 775.053C849.113 660.31 849.113 474.275 734.37 359.532C619.627 244.789 433.592 244.789 318.849 359.532Z"
            stroke="#FF9000"
            strokeWidth="120"
          />
        </svg>
      </FloatingImagePlayground>
    </>
  );
};
const FloatingImagePlayground = styled.divBox`
  position: absolute;
  z-index: -1;
`;
export default FloatingImages;

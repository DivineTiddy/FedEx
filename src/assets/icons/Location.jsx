import styled from "styled-components";

const Layout = styled.div`
  width: 40px;
  height: 40px;
`;
const Location = () => {
  return (
    <Layout>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-2 -2 116 116"
        focusable="false"
      >
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            d="M56,110.46C42.5,91.75,17,62.05,17,38.77,17,18,34.46,1.17,56,1.17S95,18,95,38.77C95,62.05,69.5,91.75,56,110.46Z"
            fill="none"
            stroke="#585958"
            strokeMiterlimit="10"
            strokeWidth="3"
          ></path>
          <ellipse
            cx="56"
            cy="36.94"
            rx="13.83"
            ry="13.83"
            fill="none"
            stroke="#333333"
            strokeMiterlimit="10"
            strokeWidth="3"
          ></ellipse>
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            d="M56,110.46C42.5,91.75,17,62.05,17,38.77,17,18,34.46,1.17,56,1.17S95,18,95,38.77C95,62.05,69.5,91.75,56,110.46Z"
            fill="none"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="3"
          ></path>
          <ellipse
            cx="56"
            cy="36.94"
            rx="13.83"
            ry="13.83"
            fill="none"
            stroke="#ffffff"
            strokeMiterlimit="10"
            strokeWidth="3"
          ></ellipse>
        </g>
      </svg>
    </Layout>
  );
};

export default Location;



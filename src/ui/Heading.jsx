import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-style: normal;
      font-size: 2.75rem;
      font-weight: 300;
      color: #ffffff;
    `}
  ${(props) =>
    props.type === "Start" &&
    css`
      font-size: 22px;
      line-height: 1.2em;
      margin-top: 20px;
      color: #333;
    `}
    ${(props) =>
    props.type === "Into" &&
    css`
      font-weight: 300;
      line-height: 1.3;
      letter-spacing: -0.4px;
      font-size: 30px;
      color: #333;
    `}
    ${(props) =>
    props.type === "Into2" &&
    css`
      font-size: 22px;
      line-height: 1.2em;
      margin-top: 20px;
      color: #333;
      text-align: start !important;
    `}
    ${(props) =>
    props.type === "FooterHeading" &&
    css`
      color: #4d148c;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.75px;
      text-transform: uppercase;
      text-align: start !important;
    `}
    text-align:center;
  font-family: Arial, Helvetica, sans-serif;
`;

export default Heading;

import styled, { css } from "styled-components";

const Text = styled.p`
  ${(props) =>
    props.type === "Para1" &&
    css`
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400px;
    `}
  ${(props) =>
    props.type === "Start" &&
    css`
      font-size: 19px;
      font-weight: 200;
      line-height: 1em;
      color: #333;
    `}
    ${(props) =>
    props.type === "IntoPara" &&
    css`
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: -0.1px;
      color: #333;
      text-align: start !important;
    `}
    ${(props) =>
    props.type === "Package" &&
    css`
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: -0.1px;
      color: #333;
    `}
    font-family: Arial, Helvetica, sans-serif;
  width: auto;
  text-align: center;
`;

export default Text;

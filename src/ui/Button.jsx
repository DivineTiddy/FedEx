import styled, { css } from "styled-components";

const Button = styled.button`
  ${(props) =>
    props.type === "LinkActive" &&
    css`
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: bold;
      width: 100%;
      height: 100%;
      background-color: #4d148c;
      color: white;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    `}
  ${(props) =>
    props.type === "NotActive" &&
    css`
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: bold;
      width: 100%;
      height: 100%;
      background-color: white;
      color: black;
      border: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    `}
  ${(props) =>
    props.type === "Track" &&
    css`
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: bold;
      width: 340px;
      height: 60px;
      background-color: #ff6200;
      color: white;
      border: none;
    `}
    ${(props) =>
    props.type === "Start" &&
    css`
      font-family: Arial, Helvetica, sans-serif;
      padding: 15px 30px;
      border: 2px solid #007ab7;
      border-radius: 40px;
      text-align: center;
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: 700;
      display: inline-block;
      color: #007ab7;
      text-transform: uppercase;
      letter-spacing: 1px;
      min-width: 160px;
      max-width: 280px;
      max-height: 72px;
      background-color: white;
    `}
    cursor: pointer;
`;

export default Button;

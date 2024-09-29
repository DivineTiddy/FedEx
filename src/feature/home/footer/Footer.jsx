import styled from "styled-components";
import Details from "./Details";
import Media from "./Media";

const Layout = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 150px;
  background-color: #fafaf7;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
`;
const Footer = () => {
  return (
    <Layout>
      <Details />
      <Media />
    </Layout>
  );
};

export default Footer;

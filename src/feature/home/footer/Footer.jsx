import styled from "styled-components";
import Details from "./Details";
import Media from "./Media";
import Terms from "./Terms";

const Layout = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 150px;
  background-color: #fafaf7;
  padding-top: 0px;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;
const Footer = () => {
  return (
    <Layout>
      <Details />
      <Media />
      <Terms/>
    </Layout>
  );
};

export default Footer;

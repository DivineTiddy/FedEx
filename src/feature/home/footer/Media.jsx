import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Facebook from "../../../assets/Image/facebook.png";
import Email from "../../../assets/Image/images (1).png";
import YouTube from "../../../assets/Image/images (2).png";

const Layout = styled.div`
  width: 90%;
  height: auto;
  margin: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
const Container = styled.div`
  width: 100px;
  height: auto;
  display: flex;
  gap: 10px;
`;
const Image = styled.img`
  width: 45px;
  height: 45px;
`;
const Media = () => {
  return (
    <Layout>
      <Heading type="FooterHeading">Follow FedEx</Heading>
      <Container>
        <a>
          <Image src={Facebook} />
        </a>
        <a>
          <Image src={Email} />
        </a>
        <a>
          <Image src={YouTube} />
        </a>
      </Container>
    </Layout>
  );
};

export default Media;

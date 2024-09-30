import styled from "styled-components";
import Link from "../main/Link";
import Tracking from "../main/Tracking";
import Heading from "../../../ui/Heading";

const Layout = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(	https://www.fedex.com/content/dam/fedex/us-united-states/Hero/homepage/hero-sept-2024-desktop.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 500px;
    gap: 40px;
    justify-content: end;
  }
  @media (min-width: 1000px) {
    height: 480px;
    
  }
`;
const TextLayout = styled.div`
  width: 320px;
  height: 92px;
  text-align: center;
  @media (min-width: 700px) {
    width: auto;
  }
`;
const ContentLayout = styled.div`
  display: none;
  @media (min-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  @media (min-width: 1000px) {
    width: 70%;
  }
`;

const Herro = () => {
  return (
    <Layout>
      <TextLayout>
        <Heading as="h1">Ship, manage, track, deliver</Heading>
      </TextLayout>
      <ContentLayout>
        <Link />
        <Tracking />
      </ContentLayout>
    </Layout>
  );
};

export default Herro;

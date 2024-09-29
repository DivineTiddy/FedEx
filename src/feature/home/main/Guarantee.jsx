import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Text from "../../../ui/Text";

const Layout = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;

const Guarantee = () => {
  return (
    <Layout>
      <Heading type="Into2">FedEx money-back guarantee</Heading>
      <Text type="IntoPara">
        We offer a money-back guarantee for select services. This guarantee may
        be suspended, modified, or revoked. Please check money-back guarantee
        for the latest status of our money-back guarantee.
      </Text>
    </Layout>
  );
};

export default Guarantee;

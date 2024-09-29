import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Text from "../../../ui/Text";
import Button from "../../../ui/Button";

const Layout = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 20px 0px;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
const Boader = styled.div`
  width: 100%;
  height: 4px;
  background-image: linear-gradient(to right, #4d148c, #ff6200);
`;
const Start = () => {
  return (
    <Layout>
      <Boader />
      <Heading type="Start">
        You’re a small business boss. And we’re here for it.
      </Heading>
      <Text type="Start">
        Save up to 40% on select shipping and surcharges when you open a free
        account.
      </Text>
      <Button type="Start">Start Saving</Button>
      <Boader />
    </Layout>
  );
};

export default Start;

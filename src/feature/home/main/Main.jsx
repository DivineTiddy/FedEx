import styled from "styled-components";
import Link from "./Link";
import Tracking from "./Tracking";
import Categories from "./Categories";
import Start from "./Start";
import Into from "./Into";
import Packages from "./Packages";
import Guarantee from "./Guarantee";

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;
const LinkAndTrack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (min-width: 700px) {
    display: none;
  }
`;
const Main = () => {
  return (
    <Layout>
      <LinkAndTrack>
        <Link />
        <Tracking />
      </LinkAndTrack>
      <Categories />
      <Start/>
      <Into/>
      <Packages/>
      <Guarantee/>
    </Layout>
  );
};

export default Main;

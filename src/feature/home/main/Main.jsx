import styled from "styled-components";
import Link from "./Link";
import Tracking from "./Tracking";
import Categories from "./Categories";
import Start from "./Start";
import Into from "./Into";
import Packages from "./Packages";
import Guarantee from "./Guarantee";
import Track from "../../track/Track";
import { useState } from "react";

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
  const [data, setData] = useState(false);
  const [query, setQuery] = useState(Number);
  const [error, setError] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    if (query == 722695085046) {
      setData(true);
    } else {
      setError(true);
      console.log(error)
    }
  }

  return (
    <Layout>
      <LinkAndTrack>
        <Link />
        <Tracking
          query={query}
          setQuery={setQuery}
          HandleSubmit={HandleSubmit}
          error={error}
        />
      </LinkAndTrack>
      <Track data={data} />
      <Categories />
      <Start />
      <Into />
      <Packages />
      <Guarantee />
    </Layout>
  );
};

export default Main;

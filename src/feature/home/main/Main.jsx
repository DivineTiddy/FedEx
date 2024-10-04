import styled from "styled-components";
import Link from "./Link";
import Tracking from "./Tracking";
import Categories from "./Categories";
import Start from "./Start";
import Into from "./Into";
import Packages from "./Packages";
import Guarantee from "./Guarantee";
import Track from "../../track/Track";
import Axios from "axios";
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
  const [data, setData] = useState(null);
  const [trackId, settrackId] = useState("");


  function Submit(e) {
    e.preventDefault();
    Axios.get(`https://fedexbackend-3.onrender.com/api/users/data`, {
      trackId,
    })
      .then((response) => {
        if (response.data.staus) {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout>
      <LinkAndTrack>
        <Link />
        <Tracking Submit={Submit} />
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

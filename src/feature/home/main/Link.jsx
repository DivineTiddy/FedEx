import styled from "styled-components";
import Location from "../../../assets/icons/Location";
import Button from "../../../ui/Button";
import Caculate from "../../../assets/icons/Caculate";
import Search from "../../../assets/icons/Search";
import Text from "../../../ui/Text";
import { useState } from "react";

const Layout = styled.ul`
  width: 90%;
  height: 100px;
  list-style: none;
  display: flex;
  margin-top: -30px;
  @media (min-width: 700px) {
    width: 70%;
    height: 150px;
  }
  @media (min-width: 1000px) {
    width: 474px;
    height: 130px;
  }
`;
const List = styled.li`
  height: 100%;
`;

const Link = () => {
  const [Rate, setRate] = useState(false);
  const [Track, setTrack] = useState(true);
  const [LOCATIONS, setLOCATIONS] = useState(false);
  function HandleRate() {
    setLOCATIONS(false);
    setTrack(false);
    setRate(true);
  }
  function HandleTrack() {
    setLOCATIONS(false);
    setRate(false);
    setTrack(true);
  }
  function HandleLocation() {
    setLOCATIONS(true);
    setRate(false);
    setTrack(false);
  }

  return (
    <Layout>
      <List>
        <Button onClick={HandleRate} type={Rate ? "LinkActive" : "NotActive"}>
          <Caculate />
          <Text>Rate & Ship</Text>
        </Button>
      </List>
      <List>
        <Button onClick={HandleTrack} type={Track ? "LinkActive" : "NotActive"}>
          <Search />
          <Text>TRACK</Text>
        </Button>
      </List>
      <List>
        <Button onClick={HandleLocation} type={LOCATIONS ? "LinkActive" : "NotActive"}>
          <Location />
          <Text>LOCATIONS</Text>
        </Button>
      </List>
    </Layout>
  );
};

export default Link;

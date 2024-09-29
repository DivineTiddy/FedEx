import styled from "styled-components";
import Location from "../../../assets/icons/Location";
import Button from "../../../ui/Button";
import Caculate from "../../../assets/icons/Caculate";
import Search from "../../../assets/icons/Search";
import Text from "../../../ui/Text";

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
  return (
    <Layout>
      <List>
        <Button type="LinkActive">
          <Caculate />
          <Text>Rate & Ship</Text>
        </Button>
      </List>
      <List>
        <Button type="LinkActive">
          <Search />
          <Text>TRACK</Text>
        </Button>
      </List>
      <List>
        <Button type="LinkActive">          
          <Location />
          <Text>LOCATIONS</Text>
        </Button>
      </List>
    </Layout>
  );
};

export default Link;

import styled from "styled-components";
import Heading from "../../../ui/Heading";

const Layout = styled.div`
  width: 100%;
  height: 94px;
  background-color: #4d148c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (min-width: 700px) {
    flex-direction: row;
    gap: 80px;
    height: 64px;

  }
`;
const TermList = styled.ul`
  width: 90%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  @media (min-width: 700px) {
    width: 60%;
  }
`;
const List = styled.li`
  width: auto;
`;
const Link = styled.a`
  letter-spacing: 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
`;
const Border = styled.span`
color: white;
width: 4.55px;
height: 21px;
font-weight: bolder;

`
const Terms = () => {
  return (
    <Layout>
      <Heading type="Term">© FedEx 1995-2024</Heading>
      <TermList>
        <List>
          <Link>Site Map</Link>
        </List>
        <Border>
            |
        </Border>
        <List>
          <Link>Terms of Use</Link>
        </List>
        <Border>
            |
        </Border>
        <List>
          <Link>Privacy & Security</Link>
        </List>
        <Border>
            |
        </Border>
        <List>
          <Link>Ad Choices</Link>
        </List>
      </TermList>
    </Layout>
  );
};

export default Terms;

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavList from "./NavList";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const Layout = styled.div`
  width: 100%;
  height: 78px;
  background-color: #4d148c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1000px) {
    justify-content: space-around;
  }
`;
const Logo = styled.div`
  width: 125px;
  height: 75px;
  display: flex;
  align-items: center;
  margin: 0px 20px;
`;

const User = styled.div`
  width: 104px;
  height: 60px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0px 20px;
`;

const Search = styled.div`
  width: 100px;
  cursor: pointer;
`;
const Bar = styled.div`
  display: flex;
  cursor: pointer;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const MobileLayout = styled.ul`
  background-color: white;
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 50%;
  gap: 20px;
  padding: 20px 20px;
  @media (min-width: 1000px) {
    display: none;
  }
`;
const Desktop = styled.ul`
  list-style: none;
  display: none;
  width: 50%;
  gap: 20px;
  @media (min-width: 1000px) {
    display: flex;
  }
`;
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  function HandleClick() {
    setIsOpen((e) => !e);
  }
  return (
    <Container>
      {" "}
      <Layout>
        <Logo>
          <img src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" />
        </Logo>
        <Desktop>
          <NavList />
        </Desktop>

        <User>
          <Search>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ width: "28px", height: "20px", color: "white" }}
            />
          </Search>
          <Bar onClick={HandleClick}>
            {isOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ width: "25px", height: "25px", color: "white" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{ width: "25px", height: "25px", color: "white" }}
              />
            )}
          </Bar>
        </User>
      </Layout>
      {isOpen && (
        <MobileLayout>
          <NavList />
        </MobileLayout>
      )}
    </Container>
  );
};

export default Nav;

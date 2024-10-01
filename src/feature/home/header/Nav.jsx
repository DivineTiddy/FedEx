import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Layout = styled.div`
  width: 100%;
  height: 78px;
  background-color: #4d148c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
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
const NavList = styled.ul`
  list-style: none;
  display: none;
  width: 50%;
  gap: 20px;
  @media (min-width: 1000px) {
    display: flex;
  }
`;
const List = styled.li`
  width: auto;
`;
const Link = styled.a`
  font-weight: 400;
  font-size: 0.875rem;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
const Nav = () => {
  return (
    <Layout>
      <Logo>
        <img src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" />
      </Logo>
      <NavList>
        <List>
          <Link href="https://www.fedex.com/en-us/shipping.html#">
            Shipping
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </List>
        <List>
          <Link>
            Tracking <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </List>
        <List>
          <Link href="https://www.office.fedex.com/">
            Design&Print
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </List>
        <List>
          <Link href="https://local.fedex.com/en-us">
            Location <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </List>
        <List>
          <Link href="https://www.fedex.com/en-us/customer-support.html">
            Support <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </List>
      </NavList>

      <User>
        <Search>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ width: "28px", height: "20px", color: "white" }}
          />
        </Search>
        <Bar>
          <FontAwesomeIcon
            icon={faBars}
            style={{ width: "25px", height: "25px", color: "white" }}
          />
        </Bar>
      </User>
    </Layout>
  );
};

export default Nav;

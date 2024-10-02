import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = styled.li`
  width: 100px;

  @media (min-width: 1000px) {
    width: auto;
  }
`;
const Link = styled.a`
  font-weight: 400;
  font-size: 0.875rem;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;
  @media (min-width: 1000px) {
    color: #fff;
  }
  &:hover {
    text-decoration: underline;
  }
`;
const NavList = () => {
  return (
    <>
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
    </>
  );
};

export default NavList;

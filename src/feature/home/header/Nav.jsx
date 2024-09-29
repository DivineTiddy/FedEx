import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Layout = styled.div`
  width: 100%;
  height: 78px;
  background-color: #4d148c;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const Image = styled.img`
  width: 50px;
  height: 50px;
  color: white !important;
  background-color: white;
`;
const Nav = () => {
  return (
    <Layout>
      <Logo>
        <img src="https://www.fedex.com/content/dam/fedex-com/logos/logo.png" />
      </Logo>
      <User>
        <Image
          alt="Sign Up or Log In"
          src="https://www.vulte.ng/static/media/30@4x.69975c7a.png"
          width="100%"
          height="100%"
        />

        {/* <FontAwesomeIcon
          icon={faUser}
          style={{ width: "28px", height: "27px", color: "white" }}
        /> */}
        <FontAwesomeIcon
          icon={faBars}
          style={{ width: "25px", height: "25px", color: "white" }}
        />
      </User>
    </Layout>
  );
};

export default Nav;

import styled from "styled-components";
import Heading from "../../../ui/Heading";

const Layout = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (min-width: 1000px) {
    width: 70%;
    flex-direction: row;
  }
`;
const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 0px;
  }
`;
const Company = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const CompanyList = styled.li``;
const Link = styled.a`
  text-decoration: none;
  line-height: 1.3 !important;
  font-weight: 400;
  font-size: 0.75rem !important;
  letter-spacing: 0;
  color: #333;
`;
const More = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MoreList = styled.li``;
const Language = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 20px;
  @media (min-width: 1000px) {
    width: 25%;
  }
`;
const LanguageContainer = styled.div`
  width: auto;
  height: 61px;
  border: 1px solid #333;
  display: flex;
  align-items:center;
`;
const Details = () => {
  return (
    <Layout>
      <Container>
        {/* COMPANY LAYOUT .............. */}
        <Company>
          <CompanyList>
            <Heading type="FooterHeading">Our Company</Heading>
          </CompanyList>
          <CompanyList>
            <Link href="">About FedEx</Link>
          </CompanyList>
          <CompanyList>
            <Link href="">Our Portfolio</Link>
          </CompanyList>
          <CompanyList>
            <Link href="">Careers</Link>
          </CompanyList>
          <CompanyList>
            <Link href="">Corporate Responsibility</Link>
          </CompanyList>
          <CompanyList>
            <Link href="">Newsroom</Link>
          </CompanyList>
          <CompanyList>
            <Link href="">Contact Us</Link>
          </CompanyList>
        </Company>
        {/* More From FedEx .........................*/}
        <More>
          <MoreList>
            <Heading type="FooterHeading">More From FedEx</Heading>
          </MoreList>
          <MoreList>
            <Link href="">FedEx Compatible</Link>
          </MoreList>
          <MoreList>
            <Link href="">FedEx Developer Portal</Link>
          </MoreList>
          <MoreList>
            <Link href="">FedEx Logistics</Link>
          </MoreList>
          <MoreList>
            <Link href="">ShopRunner</Link>
          </MoreList>
        </More>
      </Container>
      {/* Language ................*/}
      <Language>
        <Heading type="FooterHeading">LANGUAGE</Heading>
        <Link>United States</Link>
        <LanguageContainer>
          <Link href="">ENGLISH</Link>
        </LanguageContainer>
      </Language>
    </Layout>
  );
};

export default Details;

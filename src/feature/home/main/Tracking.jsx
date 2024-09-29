import styled from "styled-components";

const Layout = styled.form`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  @media (min-width: 700px) {
    width: 90%;
  }
  @media (min-width: 1000px) {
    width: 65%;
    height: 150px;
  }

`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  outline: none;
  border: none;
  background-color: #fafafa;
  color: black;
  @media (min-width: 700px) {
    width: 80%;
  }
`;
const Button = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  width: 100%;
  height: 60px;
  background-color: #ff6200;
  color: white;
  border: none;
  cursor: pointer;
  @media (min-width: 700px) {
    width: 20%;
  }
`;
const Link = styled.a`
  color: blue;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;

  @media (min-width: 700px) {
    color: white;
  }
`;
const ContentLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const Tracking = () => {
  return (
    <Layout>
      <ContentLayout>
      <Input placeholder="TRACKING ID" />
      <Button type="submit">TRACk</Button>
      </ContentLayout>
      <Link href="#">NEED HELP?</Link>
    </Layout>
  );
};

export default Tracking;

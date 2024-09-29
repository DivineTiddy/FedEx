import styled from "styled-components"
import Header from "../feature/home/header/Header"
import Main from "../feature/home/main/Main"
import Footer from "../feature/home/footer/Footer"

const Layout = styled.div`
width: 100%;
height: auto;
`

const Home = () => {
  return (
    <Layout>
        <Header/>
        <Main/>
        <Footer/>
    </Layout>
  )
}

export default Home
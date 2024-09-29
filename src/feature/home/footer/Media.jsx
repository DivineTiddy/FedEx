import styled from "styled-components"

const Layout = styled.div`
width: 90%;
height: 300px;
border: 1px solid black;
@media (min-width: 1000px) {
    width: 70%;
    flex-direction: row;
  }
`
const Media = () => {
  return (
    <Layout>

    </Layout>
  )
}

export default Media
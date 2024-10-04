import styled from "styled-components";
import Text from "../../ui/Text";
import Heading from "../../ui/Heading";
import propTypes from "prop-types"
const TrackList = styled.ul`
  width: 90%;
  height: auto;
  list-style-type: none;
  margin-top: 20px;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
const List = styled.li`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  height: 48px;
  padding: 10px 0px;
`;

const Track = ({data}) => {
  console.log(data)
  return (
  <>
   {
    data &&  <TrackList>
    <List>
      <Heading type="Track">Tracking ID</Heading>
      <Text type="Track">722695085046</Text>
    </List>
  
    <List>
      <Heading type="Track">Delivery Status</Heading>
      <Text>pending</Text>
    </List>
    <List>
      <Heading type="Track">From</Heading>
      <Text>Greensboro, NC, US</Text>
    </List>
    <List>
      <Heading type="Track">To</Heading>
      <Text>37 Circle Dr.Denison, Texas, 75021</Text>
    </List>
    <List>
      <Heading type="Track">Ship date</Heading>
      <Text>05/10/2024</Text>
    </List>
    <List>
      <Heading type="Track">Service</Heading>
      <Text>FedEx Priority Overnight</Text>
    </List>
    <List>
      <Heading type="Track">Special handling</Heading>
      <Text>
        Deliver Weekday, Residential Delivery, No Signature Required
      </Text>
    </List>
  </TrackList>
   }
  </>
  );
};
Track.propTypes = {
  data: propTypes.array,
};
export default Track;

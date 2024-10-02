import styled from "styled-components";
import Text from "../../ui/Text";
import Heading from "../../ui/Heading";

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

const Track = () => {
  return (
    <TrackList>
      <List>
        <Heading type="Track">Tracking ID</Heading>
        <Text type="Track">785226965040</Text>
      </List>
      <List>
        <Heading type="Track">Delivered</Heading>
        <Text>Thursday, 10/19/23, 9:21 AM</Text>
      </List>
      <List>
        <Heading type="Track">Delivery Status</Heading>
        <Text>Delivered</Text>
      </List>
      <List>
        <Heading type="Track">From</Heading>
        <Text>Greensboro, NC, US</Text>
      </List>
      <List>
        <Heading type="Track">To</Heading>
        <Text>SAINT PAUL, MN, US</Text>
      </List>
      <List>
        <Heading type="Track">Ship date</Heading>
        <Text>Wednesday, 10/18/23</Text>
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
  );
};

export default Track;

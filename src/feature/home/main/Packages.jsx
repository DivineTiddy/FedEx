import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Text from "../../../ui/Text";
import Button from "../../../ui/Button";

const Layout = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 40px;
  align-items: center;
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
const ListLayout = styled.ul`
  list-style: none;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
const List = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Image = styled.img``;
const Packages = () => {
  return (
    <Layout>
      <Heading type="Into">
        Track packages on the go with the FedEx® Mobile app
      </Heading>
      <ListLayout>
        <List>
          <Image src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_TrackPkgs-MapView_727x463.jpg" />
          <Text type="Package">
            Want to see how close your package is? Track deliveries using map
            view in the FedEx Mobile app.
          </Text>
        </List>
        {/* List ..................... */}
        <List>
          <Image src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_TrackPkgs-ShopAndTrack_727x463.jpg" />
          <Text type="Package">
            Keep tabs on online orders with Shop and Track. See shipments—even
            from other carriers—on your phone.
          </Text>
        </List>
        {/* List ..................... */}
        <List>
          <Image src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_TrackPkgs-FedExDeliveryManager_727x46327x463.jpg" />
          <Text type="Package">
            See when packages arrive with picture proof of delivery. Use FedEx
            Delivery Manager® to place package holds.
          </Text>
        </List>
      </ListLayout>
      <Button type="Start">
      Download the app
      </Button>
    </Layout>
  );
};

export default Packages;

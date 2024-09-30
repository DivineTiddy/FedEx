import styled from "styled-components";
import Heading from "../../../ui/Heading";
import Text from "../../../ui/Text";

const Layout = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
const ListLayout2 = styled.ul`
  list-style: none;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const List2 = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 700px) {
    width: 75%;
  }
`;
const Image2 = styled.img`
  @media (min-width: 700px) {
    width: 25%;
  }
`;
const ListLayout3 = styled.ul`
  list-style: none;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Image3 = styled.img`
  @media (min-width: 700px) {
    width: 50%;
  }
`;
const List3 = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 700px) {
    flex-direction: row-reverse;
  }
`;
const ListContainer3 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 700px) {
    width: 50%;
  }
`;
const Link = styled.a`
  color: #007ab7 !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  line-height: 1.3 !important;
  font-weight: 700 !important;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Into = () => {
  return (
    <Layout>
      <Heading type="Into">Fall into easier shipping</Heading>
      <ListLayout>
        {/* LIST .................... */}
        <List>
          <Image src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_UnifyCustomerJourney_727x463.jpg" />
          <Heading as="h4">
            Unify your customer journey, from start to finish
          </Heading>
          <Text type="IntoPara">
            Build strong customer relationships with our new ecommerce platform,
            fdx. Optimize workflows, boost customer experience, and streamline
            options. From demand to conversion, fulfillment to returns.
          </Text>
          <Link>Explore fdx solutions</Link>
        </List>
        {/* LIST .................... */}
        <List>
          <Image src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_ReachNewMarkets_727x463.jpg" />
          <Heading as="h4">
            Reach new markets with global air freight shipping
          </Heading>
          <Text type="IntoPara">
            It’s fast and easy to send international shipments that weigh 150
            lbs. or more. Items arrive in 1–5 business days. Plus, there’s no
            need for freight forwarders, and customs clearance is included.
          </Text>
          <Link>Get a rate quote</Link>
        </List>
      </ListLayout>
      {/* LIST LAYOUT 2 ...............................*/}
      <ListLayout2>
        <List2>
          <Image2 src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_Quick_Shipping_727x463.jpg" />
          <ListContainer>
            <Heading as="h4">Quick shipping in fewer clicks</Heading>
            <Text type="IntoPara">
              Get ready for the busy holiday shipping season with FedEx Ship
              Manager®. Sync your online store, create labels faster, and keep
              customers updated on their shipment.
            </Text>
            <Link>Manage your shipping</Link>
          </ListContainer>
        </List2>
        {/* List 2 ....................... */}
        <List2>
          <Image2 src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_EarnGiftCards_727x463.jpg" />
          <ListContainer>
            <Heading as="h4">Earn gift cards with FedEx Rewards</Heading>
            <Text type="IntoPara">
              Holiday shipping is right around the corner. Don’t miss out on all
              the benefits our free loyalty program has to offer—including gift
              cards to name-brand retailers. Enroll today to receive your
              welcome offer.
            </Text>
            <Link>Join now</Link>
          </ListContainer>
        </List2>
        {/* List 2 ....................... */}
        <List2>
          <Image2 src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_FindTheSpeed_727x463.jpg" />
          <ListContainer>
            <Heading as="h4">Find the speed and cost you need</Heading>
            <Text type="IntoPara">
              Choose from fast, time-definite services or reliable,
              cost-effective shipping to every ZIP code. Compare the benefits
              and pick the right option for you and your recipient.
            </Text>
            <Link>Start a shipment</Link>
          </ListContainer>
        </List2>
        {/* List 2 ....................... */}
        <List2>
          <Image2 src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_DroppingOffPkgs_727x463.jpg" />
          <ListContainer>
            <Heading as="h4">Dropping off packages is easy</Heading>
            <Text type="IntoPara">
              Need to get those last few customer orders out the door today?
              Find the nearest drop off location in a few clicks. Some are even
              open 24 hours.
            </Text>
            <Link>Find a location</Link>
          </ListContainer>
        </List2>
      </ListLayout2>
      {/* List 3 ....................... */}
      <ListLayout3>
        <List3>
          <Image3 src="https://www.fedex.com/content/dam/fedex/us-united-states/shipping/images/POD_HispanicHeritage_727x463.jpg" />
          <ListContainer3>
            <Heading as="h4">Celebrating Hispanic Heritage Month</Heading>
            <Text type="IntoPara">
              Hispanic Heritage Month is a month-long celebration of Hispanic
              and Latino history and culture. See how some of our team members
              stay connected to their roots and why they feel diversity and
              inclusion matter.
            </Text>
            <Link>Read the stories</Link>
          </ListContainer3>
        </List3>
      </ListLayout3>
    </Layout>
  );
};

export default Into;

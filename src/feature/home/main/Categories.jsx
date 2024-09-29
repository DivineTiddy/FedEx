import icon1 from "../../../assets/icon_alert_purple_lg.png";
import icon2 from "../../../assets/icon_courier_purple_lg_1637809911.png";
import icon3 from "../../../assets/icon_retail_services_purple_med.png";
import icon4 from "../../../assets/icon_returns_purple_lg_1184917500.png";

import styled from "styled-components";
import Text from "../../../ui/Text";

const List = styled.ul`
  width: 90%;
  height: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  @media (min-width: 700px) {
    flex-direction: row;
    width: 80%;
    justify-content: space-around;
    margin-top: 80px;
  }
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
const Items = styled.li`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (min-width: 700px) {
    width: 104px;
    text-align: center;
    gap: 20px;

  }
`;
const Image = styled.img`
  width: 82px;
  height: 82px;
`;

const Categories = () => {
  return (
    <List>
      {/* drop off a package */}
      <Items>
        <Image src={icon2} />
        <Text>
          <a
            href=""
            style={{ color: "blue", textDecoration: "none", width: "auto" }}
          >
            drop off a package
          </a>
        </Text>
      </Items>
      {/* drop off a package */}
      <Items>
        <Image src="https://www.fedex.com/content/dam/fedex-com/brand-icons/purple/delivery.svg" />
        <Text>
          <a
            href=""
            style={{ color: "blue", textDecoration: "none", width: "auto" }}
          >
            Redirect a package
          </a>
        </Text>
      </Items>
      {/* drop off a package */}
      <Items>
        <Image src={icon3} />
        <Text>
          <a
            href=""
            style={{ color: "blue", textDecoration: "none", width: "auto" }}
          >
            Store hours and services
          </a>
        </Text>
      </Items>
      {/* drop off a package */}
      <Items>
        <Image src={icon1} />
        <Text>
          <a
            href=""
            style={{ color: "blue", textDecoration: "none", width: "auto" }}
          >
            service alerts
          </a>
        </Text>
      </Items>
      {/* drop off a package */}
      <Items>
        <Image src={icon4} />
        <Text>
          <a
            href=""
            style={{ color: "blue", textDecoration: "none", width: "auto" }}
          >
            return a package
          </a>
        </Text>
      </Items>
    </List>
  );
};

export default Categories;

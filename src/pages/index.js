import Layout from "@/components/common/Layout";
import Typography from "@/components/common/Typography";
import Selectbox from "@/components/common/input/Selectbox";
import { useGetServersQuery } from "@/store/queries/ServerQueries";
import {
  AddBtn,
  AlarmContainer,
  CardWrapper,
  ChipWrapper,
  Container,
  FilterContainer,
  Items,
  LocationWrapper,
  SettingsContainer,
} from "@/styles/components/MainStyles";
import theme from "@/styles/theme";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: servers, isFetching, isLoading } = useGetServersQuery();
  const [server, setServer] = useState("All");
  useEffect(() => {
    console.log(server);
  }, [server]);

  const onSubmit = () => {
    console.log("submit!", marchant);
    // axios
    //   .post("http://localhost:3000/api/alarm", {
    //     location: marchant.location,
    //     npc: marchant.npc,
    //     item: marchant.item,
    //   })
    //   .then((res) => console.log(res));
  };

  if (!isLoading)
    return (
      <Layout>
        <AddBtn>
          <Image
            src={"/assets/icons/add-btn.svg"}
            alt={"add-btn"}
            width={50}
            height={50}
          />
        </AddBtn>
        <Container>
          <FilterContainer>
            <Selectbox options={servers} value={server} onChange={setServer} />
            {/* keyword & alarm */}
            <SettingsContainer onClick={() => console.log("Setting!")}>
              <Image
                src={"/assets/icons/settings.svg"}
                alt={"settings"}
                width={25}
                height={25}
              />
              <Typography typeface={"M4"}>Keywords & Alert</Typography>
            </SettingsContainer>
          </FilterContainer>
          <AlarmContainer>
            <Alarm
              server={server}
              location={"Anikka / Twilight Mists"}
              cardGrade={"leg"}
              cardNm={"Wei"}
              rapportGrade={"leg"}
            />
            <Alarm
              server={server}
              location={"Tortoyk / Forest of Giants"}
              cardGrade={"unc"}
              cardNm={"Mokamoka"}
              rapportGrade={"epic"}
            />
            <Alarm
              server={server}
              location={"Anikka / Twilight Mists"}
              cardGrade={"leg"}
              cardNm={"Wei"}
              rapportGrade={"leg"}
            />
            <Alarm
              server={server}
              location={"Tortoyk / Forest of Giants"}
              cardGrade={"unc"}
              cardNm={"Mokamoka"}
              rapportGrade={"epic"}
            />
            <Alarm
              server={server}
              location={"Anikka / Twilight Mists"}
              cardGrade={"leg"}
              cardNm={"Wei"}
              rapportGrade={"leg"}
            />
            <Alarm
              server={server}
              location={"Tortoyk / Forest of Giants"}
              cardGrade={"unc"}
              cardNm={"Mokamoka"}
              rapportGrade={"epic"}
            />
            <Alarm
              server={server}
              location={"Anikka / Twilight Mists"}
              cardGrade={"leg"}
              cardNm={"Wei"}
              rapportGrade={"leg"}
            />
            <Alarm
              server={server}
              location={"Tortoyk / Forest of Giants"}
              cardGrade={"unc"}
              cardNm={"Mokamoka"}
              rapportGrade={"epic"}
            />
          </AlarmContainer>
        </Container>
      </Layout>
    );
}

const Alarm = ({ server, location, cardGrade, cardNm, rapportGrade }) => {
  return (
    <Items>
      <div className="alarm-info">
        {/* server */}
        <ServerChip serverNm={server} />
        {/* location */}
        <Location locationNm={location} />
        <Image
          src={"/assets/icons/arrow-right.svg"}
          alt={"arrow-right"}
          width={20}
          height={20}
        />
        {/* card */}
        <Card grade={cardGrade} cardNm={cardNm} />
        <Image
          src={"/assets/icons/arrow-right.svg"}
          alt={"arrow-right"}
          width={20}
          height={20}
        />
        {/* rapport */}
        <Rapport grade={rapportGrade} />
      </div>
      <div className="user-info">
        <Typography typeface={"S2"} color={theme.colors.text.gray}>
          User name
        </Typography>
      </div>
    </Items>
  );
};

const ServerChip = ({ serverNm }) => {
  return (
    <ChipWrapper>
      <p>{serverNm}</p>
    </ChipWrapper>
  );
};

const Location = ({ locationNm }) => {
  return (
    <LocationWrapper>
      <Image src={"/assets/icons/pin.svg"} alt={"pin"} width={25} height={25} />
      <Typography typeface={"M3"}>{locationNm}</Typography>
    </LocationWrapper>
  );
};

const Card = ({ grade, cardNm }) => {
  const convertIcon = (grade) => {
    switch (grade) {
      case "leg":
        return "leg-card.svg";
      case "epic":
        return "epic-card.svg";
      case "rare":
        return "rare-card.svg";
      case "unc":
        return "unc-card.svg";
      default:
        return null;
    }
  };

  return (
    <CardWrapper>
      <Image
        src={`/assets/icons/${convertIcon(grade)}`}
        alt={"leg-rapportbox"}
        width={45}
        height={45}
      />
      <Typography typeface={"M3"}>{cardNm}</Typography>
    </CardWrapper>
  );
};

const Rapport = ({ grade }) => {
  const convertIcon = (grade) => {
    switch (grade) {
      case "leg":
        return "leg-rapportbox.svg";
      case "epic":
        return "epic-rapportbox.svg";
      default:
        return null;
    }
  };

  return (
    <CardWrapper>
      <Image
        src={`/assets/icons/${convertIcon(grade)}`}
        alt={"leg-rapportbox"}
        width={45}
        height={45}
      />
      <Typography typeface={"M3"}>
        {grade === "leg" ? "Legendary Rapport" : "Epic Rapport"}
      </Typography>
    </CardWrapper>
  );
};

/**
 * 
export async function getStaticProps() {
  try {
    const response = await axios.post("http://localhost:3000/api/alarm", {
      location: marchant.location,
      npc: marchant.npc,
      item: marchant.item,
    });
    return {
      props: {
        foodGetData: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}
 */

import Layout from "@/components/common/Layout";
import Modal from "@/components/common/Modal";
import ModalPortal from "@/components/common/Portal";
import Typography from "@/components/common/Typography";
import Selectbox from "@/components/common/input/Selectbox";
import { useAppSelector } from "@/store";
import { useGetAlarmsQuery } from "@/store/queries/AlarmQueries";
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
import _ from "lodash";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const { data: servers, refetch } = useGetServersQuery(1);
  const { data: alarms, refetch: getAlarms } = useGetAlarmsQuery();
  const [server, setServer] = useState('All');
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (!add) {
      refetch();
    }
  }, [add]);

  useEffect(() => {
    getAlarms();
  }, [server])

  const onSubmit = () => {
    console.log("submit!", marchant);
    // axios
    //   .post("http://localhost:3000/api/alarm", {~
    //     location: marchant.location,
    //     npc: marchant.npc,
    //     item: marchant.item,
    //   })
    //   .then((res) => console.log(res));
  };

  if (!_.isUndefined(servers))
    return (
      <Layout>
        {!add && (
          <AddBtn onClick={() => setAdd(true)}>
            <Image
              src={"/assets/icons/add-btn.svg"}
              alt={"add-btn"}
              width={50}
              height={50}
            />
          </AddBtn>
        )}
        <Container>
          <FilterContainer>
            <Selectbox
              options={servers?.map(items => items.serverName)}
              value={server}
              onChange={setServer}
            />
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
            {
              server !== "All" ?
                alarms?.filter(alarm => alarm.serverName === server).map(alarm => {
                  return <Alarm
                    server={alarm.serverName}
                    location={`${alarm.continentName} / ${alarm.locationName}`}
                    cardGrade={alarm.grade}
                    cardNm={alarm.cardName}
                    rapportGrade={alarm.rapport}
                    user={alarm.user}
                    datetime={alarm.datetime}
                  />
                }) :
                alarms?.map(alarm => {
                  return <Alarm
                    server={alarm.serverName}
                    location={`${alarm.continentName} / ${alarm.locationName}`}
                    cardGrade={alarm.grade}
                    cardNm={alarm.cardName}
                    rapportGrade={alarm.rapport}
                    user={alarm.user}
                    datetime={alarm.datetime}
                  />
                })
            }

          </AlarmContainer>
        </Container>
        <ModalPortal openPortal={add} closePortal={() => setAdd(false)}>
          <Modal closeModal={() => setAdd(false)} />
        </ModalPortal>
        <div id="root-modal"></div>
      </Layout>
    );
}

const Alarm = ({ server, location, cardGrade, cardNm, rapportGrade, user, datetime }) => {
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
          {user}
        </Typography>
        <Typography typeface={"S2"} color={theme.colors.text.gray}>
          {datetime}
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
      case "L":
        return "leg-card.svg";
      case "E":
        return "epic-card.svg";
      case "R":
        return "rare-card.svg";
      case "U":
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
      case "Legendary":
        return "leg-rapportbox.svg";
      case "Epic":
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

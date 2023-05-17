import styled from "@emotion/styled";
import Image from "next/image";
import Typography from "./Typography";
import { useGetServersQuery } from "@/store/queries/ServerQueries";
import { useGetContinentsQuery } from "@/store/queries/ContinentsQueries";
import Selectbox from "./input/Selectbox";
import { useEffect, useState } from "react";
import theme from "@/styles/theme";
import { useAppSelector } from "@/store";
import { useLazyGetLocationsQuery } from "@/store/queries/LocationQueries";
import { useLazyGetCardsQuery } from "@/store/queries/CardQueries";
import Chip from "./Chip";
import axios from "axios";
import moment from "moment/moment";
import { useInsertAlarmsMutation } from "@/store/queries/AlarmQueries";

export default function Modal({ closeModal }) {
  const [server, setServer] = useState("");
  const [continent, setContinent] = useState("");
  const [location, setLocation] = useState("");
  const [card, setCard] = useState("");
  const [rapport, setRapport] = useState("");

  const { data: servers } = useGetServersQuery(0, {
    refetchOnMountOrArgChange: true,
  });
  const { data: continents } = useGetContinentsQuery();
  const [getLocations, locations] = useLazyGetLocationsQuery();
  const [getCards, cards] = useLazyGetCardsQuery();
  const [insertAlarm] = useInsertAlarmsMutation();

  useEffect(() => {
    if (!_.isEmpty(continent)) {
      const continentId = continents?.find(
        (c) => c.continentName === continent
      ).continentId;
      getLocations(continentId);
      getCards(continentId);
    }
    return () => {
      setLocation("");
    };
  }, [continent]);

  const tipOff = () => {
    const serverId = servers?.find(
      (items) => items.serverName === server
    ).serverId;
    const continentId = continents?.find(
      (items) => items.continentName === continent
    ).continentId;
    const locationId = locations.data?.find(
      (items) => items.location === location
    ).locationId;
    const cardId = cards.data?.find((items) => items.card === card).cardId;
    const grade = cards.data?.find((items) => items.card === card).grade;
    const _rapport = rapport === 'Epic' ? 0 : 1;

    const req = {
      serverId: serverId,
      serverName: server,
      continentId: continentId,
      continentName: continent,
      locationId: locationId,
      locationName: location,
      cardId: cardId,
      cardName: card,
      grade: grade,
      rapportFlg: _rapport,
      rapport: rapport,
      user: 'TEST_USER',
      datetime: moment().format('HH:mm')
    };
    console.log("req : ", req);
    insertAlarm(req).then(() => closeModal());
  };

  if (!_.isUndefined(servers) && !_.isUndefined(continents))
    return (
      <ModalContainer>
        <TitleWrapper>
          <Title>
            <Typography typeface={"B1"}>Tip Off!</Typography>
          </Title>
          <CloseBtn onClick={closeModal}>
            <Image
              src={"/assets/icons/close.svg"}
              alt={"close"}
              width={20}
              height={20}
            />
          </CloseBtn>
        </TitleWrapper>
        <ContentsWrapper>
          <Category>
            <Selectbox
              className={"modal-selectbox-server"}
              options={servers?.map((items) => items.serverName)}
              label={"Server"}
              defaultOption={""}
              value={server}
              onChange={setServer}
            />
          </Category>
          <Category>
            <div className="row">
              <Selectbox
                className={"modal-selectbox-continents"}
                options={continents?.map((items) => items.continentName)}
                label={"Continent"}
                defaultOption={""}
                value={continent}
                onChange={setContinent}
              />
              <Selectbox
                className={"modal-selectbox-continents"}
                options={
                  !_.isUndefined(locations.data)
                    ? locations.data?.map((items) => items.location)
                    : []
                }
                label={"Location"}
                defaultOption={""}
                value={location}
                onChange={setLocation}
              />
            </div>
          </Category>
          <Category>
            <div className="row">
              <Selectbox
                className={"modal-selectbox-cards"}
                options={
                  !_.isUndefined(cards.data)
                    ? cards.data?.map((items) => items.card)
                    : []
                }
                label={"Card"}
                defaultOption={""}
                value={card}
                onChange={setCard}
              />
              <Selectbox
                className={"modal-selectbox-rapport"}
                options={["Epic", "Legendary"]}
                label={"Rapport"}
                defaultOption={""}
                value={rapport}
                onChange={setRapport}
              />
            </div>
          </Category>
        </ContentsWrapper>
        <ButtonWrapper>
          <TipoffBtn onClick={() => tipOff()}>
            <Typography typeface={"M2"} color={theme.colors.white}>
              Done
            </Typography>
          </TipoffBtn>
        </ButtonWrapper>
      </ModalContainer>
    );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
`;

const CloseBtn = styled.button`
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding-right: 24px;
  border-radius: 10px;
  border: none;
  background: transparent;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 36px;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 30px 36px;
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const TipoffBtn = styled.button`
  cursor: pointer;
  width: 120px;
  height: 50px;
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 12px;
`;

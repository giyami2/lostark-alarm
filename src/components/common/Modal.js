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

export default function Modal({ closeModal }) {
  const serverList = useAppSelector((state) => state.servers.list);
  const continentsList = useAppSelector((state) => state.continents.list);
  const locations = useAppSelector((state) => state.locations.list);
  const [server, setServer] = useState("");
  const [continent, setContinent] = useState("");
  const [location, setLocation] = useState("");

  const { data: servers } = useGetServersQuery(0);
  const { data: continents } = useGetContinentsQuery();
  const [getLocations] = useLazyGetLocationsQuery();

  useEffect(() => {
    if (!_.isEmpty(continent)) {
      const continentId = continents?.find(
        (c) => c.continentName === continent
      ).continentId;
      getLocations(continentId);
    }
    return () => {
      setLocation("");
    }
  }, [continent]);

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
              options={serverList}
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
                options={continentsList}
                label={"Continent"}
                defaultOption={""}
                value={continent}
                onChange={setContinent}
              />
              <Selectbox
                className={"modal-selectbox-continents"}
                options={locations}
                label={"Location"}
                defaultOption={""}
                value={location}
                onChange={setLocation}
              />
            </div>
          </Category>
        </ContentsWrapper>
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

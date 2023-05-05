import styled from "@emotion/styled";
import { theme } from "../theme";

export const HeaderLayout = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 21px 34px;

  position: relative;
  height: 50px;

  background: #ffffff;
  border-bottom: 4px solid ${props => props.theme.colors.gray1};
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  gap: 20px;
`;

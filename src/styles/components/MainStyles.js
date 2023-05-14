import styled from "@emotion/styled";

export const MainLayout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Container = styled.div`
  height: 100vh;
  padding: 0 120px;
  transform: translate(0, 15%);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SettingsContainer = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

export const AlarmContainer = styled.div`
  padding: 30px;
  background: ${(props) => props.theme.colors.gray1};
  display: flex;
  flex-direction: column;
  border-top: 4px solid ${(props) => props.theme.colors.secondary};
  gap: 12px;
`;

export const Items = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: ${(props) => props.theme.colors.white};
  border-radius: 25px;

  .alarm-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

export const ChipWrapper = styled.div`
  width: auto;
  min-width: 40px;
  height: 28px;
  padding: 0 12px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme.colors.whitegray};
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

export const AddBtn = styled.button`
  background: transparent;
  border: none;
  position: fixed;
  bottom: 20px;
  right: 40px;
  z-index: 999;
`;

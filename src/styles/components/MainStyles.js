import styled from "@emotion/styled";

export const MainLayout = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100vh;
  padding: 0 130px;
  transform: translate(0, 15%);
  display: flex;
  flex-direction: column;
  gap: 20px;

  .section-alarm-list {
    height: 100vh;
    background: ${(props) => props.theme.colors.gray1};
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

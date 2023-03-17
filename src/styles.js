import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 0px;
  margin: 0;
  box-sizing: border-box;

  &,
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

export const ContainerPage = styled.div`
  flex-grow: 2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

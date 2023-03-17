import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  min-width: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  overflow: auto;

  .button-save {
    width: 20px;
    height: 20px;
    min-width: 20px;
    .button {
      width: 100%;
      height: 100%;
      padding: 0px;
    }
  }
`;

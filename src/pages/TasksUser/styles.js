import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0px 20px 0px 30px;

  .contentPage {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    flex-grow: 2;
    overflow: hidden;
    padding: 0px 0px 15px 0px;
  }

  // modalAlert
  + .container-backgroundModal .ticketsPage-modal .contentModal {
    max-width: 400px;
  }
`;

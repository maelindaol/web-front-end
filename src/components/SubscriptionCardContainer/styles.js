import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 200px;
  height: 100%;
  padding: 0px 5px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(138, 108, 170); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }

  > .container-cardList {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;

    > .label-subtitle {
      font-family: "RobotoMedium", sans-serif;
      font-size: 15px;
      color: #808080;
      text-align: left;
      cursor: default;
      line-height: 1.1;
    }

    > .containerList {
      display: flex;
      flex-direction: column;
      flex-flow: column-reverse;
      gap: 10px;
    }
  }

  > .container-emptyList {
    width: 100%;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    > label {
      font-family: "RobotoMedium", sans-serif;
      font-size: 20px;
      color: #808080;
      text-align: center;
      cursor: default;
      line-height: 1.1;
    }
  }
`;

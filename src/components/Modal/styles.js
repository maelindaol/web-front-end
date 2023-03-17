import styled from "styled-components";
import { FontFamily } from "../../global-files/variables";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  .contentModal {
    width: fit-content;
    max-width: 80%;
    min-width: 80px;
    height: fit-content;
    max-height: 90%;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    padding: 25px 25px 20px 25px;
    box-shadow: 0px 2px 4px 0px #00000040;

    header {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 6px;
      margin-bottom: 20px;

      .label-title {
        width: 100%;
        text-align: center;
        font-family: ${FontFamily.RobotoMedium}, sans-serif;
        font-size: 17px;
        line-height: 1.2;
        color: #262626;
        white-space: pre-wrap;
      }
    }

    .label-message {
      width: 100%;
      text-align: center;
      font-family: ${FontFamily.RobotoRegular}, sans-serif;
      font-size: 13px;
      color: #707070;
      white-space: pre-wrap;
    }

    .container-customComponent {
      width: 100%;
      max-height: 50vh;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      padding: 0px 0px;
      //border: 1px solid red;
    }

    .container-buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 12px;
      margin-top: 20px;
      //border: 1px solid red;
    }
  }
`;

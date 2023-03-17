import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0px;
  flex-grow: 2;
  min-width: 150px;
  height: 100%;
  border-radius: 10px;
  overflow: auto;
  border: 1px solid #f0f0f0;

  // contenedor de la parte izquierda
  .containerData {
    width: 100%;
    min-width: 200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 15px 20px;

    .containerHeader {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 12px;
      align-items: flex-start;
      //border: 1px solid blue;

      & + * {
        margin-top: 15px;
      }

      .container-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
        flex-grow: 2;

        // title
        > .label-title {
          font-family: "RobotoMedium", sans-serif;
          font-size: 15px;
          color: #262626;
          text-align: left;
          cursor: default;
          white-space: pre-line;
          line-height: 1.1;
          padding: 3px 0px;
          border: 1px solid transparent;
        }

        // input title
        .inputTitle {
          background-color: transparent;
          width: 100%;
          min-width: 40px;
          font-family: "RobotoMedium", sans-serif;
          font-size: 15px;
          color: #262626;
          text-align: left;
          line-height: 1.1;
          padding: 3px 3px;
          border-radius: 3px;
          border: 1px solid #f0f0f0;
          outline: none;
          transition: border 0.3s;
          &:focus {
            border: 1px solid #b3b3b3;
          }
          &::placeholder {
            color: #9f9f9f;
          }
        }

        // date
        > .label-date {
          max-width: 100%;
          font-family: "RobotoRegular", sans-serif;
          font-size: 11px;
          color: #b3b3b3;
          text-align: left;
          white-space: pre-line;
          cursor: default;
          line-height: 1.1;
        }
      }
    }

    .buttonsSection2 {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 0px;

      // etiquetas de vista
      .label-status {
        padding: 7px 10px 5px 10px;
        border-radius: 3px;
        font-family: "RobotoRegular", sans-serif;
        font-size: 10px;
        text-align: center;
        cursor: default;
        line-height: 1.1;
        background-color: #85bc5b;
        color: white;
      }
    }

    hr {
      width: 100%;
      margin: 0px;
      border-top: 1px solid #b3b3b3;
    }

    .inputDescription {
      background-color: transparent;
      width: 100%;
      min-width: 40px;
      margin-top: 10px;
      font-family: "RobotoRegular", sans-serif;
      font-size: 12px;
      color: #808080;
      text-align: left;
      line-height: 1.1;
      padding: 3px 3px;
      border-radius: 3px;
      border: 1px solid #f0f0f0;
      outline: none;
      resize: none;
      transition: border 0.3s;
      &:disabled {
        border-color: transparent;
      }
      &:focus {
        border: 1px solid #b3b3b3;
      }
      &::placeholder {
        color: #9f9f9f;
      }
    }
  }

  // modal warning
  .modalWarning .contentModal {
    max-width: 70%;
    min-width: 300px;
    padding: 15px 20px;

    header {
      margin-bottom: 10px;
    }

    .label-title,
    .label-message {
      text-align: left;
    }
    .label-message {
      white-space: pre-line;
    }

    .container-buttons {
      justify-content: flex-end;
    }
  }

  .container-emptyPage {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
  }
`;

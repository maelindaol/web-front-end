import styled from "styled-components";
import { Modal } from "../Modal";

export const Container = styled(Modal)`
  .contentModal {
    min-width: 330px;
    max-width: 450px;
    padding: 15px 20px;
    header {
      margin: unset;
      .label-title {
        text-align: left;
      }
    }

    .container-customComponent {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      gap: 10px;
      // input title
      .container-inputTitle {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 10px;
        border-radius: 5px;
        padding: 8px 10px;
        transition: border 0.3s;
        border: 1px solid #f0f0f0;
        &.active {
          border: 1px solid #b3b3b3;
        }
        img {
          width: 12px;
        }
        .inputTitle {
          background-color: transparent;
          flex-grow: 2;
          min-width: 40px;
          font-family: "RobotoRegular", sans-serif;
          font-size: 12px;
          color: #808080;
          text-align: left;
          line-height: 1.1;
          outline: none;
          border: none;
          &::placeholder {
            color: #9f9f9f;
          }
        }
      }
      // descripcion
      .inputDescription {
        background-color: transparent;
        width: 100%;
        min-width: 40px;
        font-family: "RobotoRegular", sans-serif;
        font-size: 12px;
        color: #808080;
        text-align: left;
        line-height: 1.1;
        padding: 8px 10px;
        border-radius: 5px;
        border: 1px solid #f0f0f0;
        outline: none;
        resize: none;
        transition: border 0.3s;
        &:focus {
          border: 1px solid #b3b3b3;
        }
        &::placeholder {
          color: #9f9f9f;
        }
      }

      // container datos extra select
      .container-dataGrid {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(min-content, auto) minmax(60%, auto);
        grid-column-gap: 4px;
        grid-row-gap: 5px;
        justify-items: flex-start;
        align-items: center;

        .label-title {
          font-family: "RobotoRegular", sans-serif;
          font-size: 12px;
          color: #262626;
          text-align: left;
          line-height: 1.1;
        }
        .label-read {
          font-family: "RobotoRegular", sans-serif;
          font-size: 10px;
          color: #808080;
          font-weight: 600;
          text-align: left;
          padding: 10px 16px;
          background-color: #fcebf7;
          cursor: not-allowed;
        }

        // boton SELECT RESPONSABLE
        .btnSelectResponsible .button {
          border: none;
          flex-direction: row-reverse;
          font-family: "RobotoRegular", sans-serif;
          color: #808080;
          text-align: left;
        }
        // RANGE CALENDAR
        .container-rangeCalendar {
          width: fit-content;
          > div .calendar-dropdown {
            min-width: 100px;
            padding: 10px 16px;
            border: none;
            border-radius: 0px;
            gap: 10px;
            background: transparent;
            transition: background 0.25s;
            &:hover {
              background-color: #f4f4f4;
            }
            > p {
              font-family: "RobotoRegular", sans-serif;
              font-size: 10px;
              color: #808080;
              padding: 0px;
              margin: 0px;
            }
            .arrow-item {
              font-size: 11px;
              color: #808080;
              margin: 0px;
            }
          }
        }
      }
    }

    .container-buttons {
      justify-content: flex-end;
    }
  }
`;

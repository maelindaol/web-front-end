import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .contentHeader {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.6px solid #f0f0f0;

    .labelTitle {
      text-align: left;
      letter-spacing: 0.3px;
      color: #262626;
      font-family: "RobotoMedium", sans-serif;
      font-size: 25px;
      font-weight: bold;
      margin: 0px;
    }

    .container-userMenu {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
      align-items: center;
      justify-content: flex-start;

      .buttonAddRelease {
        width: 34px;
        height: 34px;
        .button {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  /* & + * {
    margin-top: 20px;
  } */
`;

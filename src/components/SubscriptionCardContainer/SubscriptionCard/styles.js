import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 15px 15px 15px 20px;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  width: 100%;
  transition: background 0.25s;
  background-color: ${({ isSelected }) => (isSelected ? "#eeeef7" : "white")};
  cursor: pointer;
  * {
    cursor: inherit !important;
  }
  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#eeeef7" : "#f6f5f5"};
  }

  .containerHeader {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: flex-start;

    .container-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      flex-grow: 2;

      // title
      > .label-title {
        max-width: 100%;
        display: -webkit-box;
        font-family: "RobotoMedium", sans-serif;
        font-size: 15px;
        color: #262626;
        text-align: left;
        font-weight: bolder;
        text-overflow: ellipsis;
        overflow: hidden;
        cursor: default;
        line-height: 1.1;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
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

  // descripcion
  .label-descripcion {
    display: -webkit-box;
    width: 100%;
    margin-top: 10px;
    font-family: "RobotoRegular", sans-serif;
    font-size: 12px;
    color: #808080;
    text-align: left;
    cursor: default;
    line-height: 1.1;
    white-space: pre-wrap;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .label-info {
    padding: 4px 10px 5px;
    font-family: "RobotoRegular", sans-serif;
    font-size: 11px;
    padding: 4px 10px 5px;
    border-radius: 3px;
    color: #262626;
    background-color: rgb(133, 188, 91);
    color: white;
    text-align: left;
    font-weight: 400;
    line-height: 1.1;
  }

  // legends
  .containerLegends {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 40px;

  .empty-hi-img {
    width: 220px;
    object-fit: contain;
  }
  .empty-hi {
    font-family: "RobotoRegular", sans-serif;
    color: #808080;
    font-size: 17px;
    text-align: center;
  }
`;

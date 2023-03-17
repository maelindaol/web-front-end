import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  img {
    width: 40%;

    & + * {
      margin-top: 40px;
    }
  }

  h2 {
    font-family: Roboto;
    width: 25%;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #503d66;
  }
`;

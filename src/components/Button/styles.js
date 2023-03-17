import styled from "styled-components";
import { FontFamily } from "../../global-files/variables";

export const Container = styled.div`
  width: fit-content;
  padding: 0px;
  cursor: ${({ disabled, isLoading }) =>
    disabled || isLoading ? "not-allowed" : "pointer"};
  border-radius: ${({ label, borderType, transparent }) => {
    return borderType?.toLowerCase() === "rectangle"
      ? "6px"
      : borderType?.toLowerCase() === "oval"
      ? "17px"
      : borderType?.toLowerCase() === "circle"
      ? "50%"
      : transparent
      ? "6px"
      : label && label?.trim() !== ""
      ? "17px"
      : "6px"; // default rectangle
  }};
  border: none;

  .button {
    --size: ${({ size }) => (size ? size : "13")}px;
    width: 100%;
    min-width: min-content;
    cursor: inherit;
    display: flex;
    flex-direction: ${({ iconPosition }) =>
      iconPosition === "top"
        ? "column"
        : iconPosition === "right"
        ? "row-reverse"
        : iconPosition === "bottom"
        ? "column-reverse"
        : "row"};
    gap: 7px;
    align-items: center;
    justify-content: center;
    padding: ${({ label, borderType }) => {
      return label && label?.trim() !== ""
        ? "5px 15px" // button con label
        : "5px";
    }};
    border-radius: inherit;
    border: ${({ label, borderType, transparent }) => {
      return ["rectangle", "circle", "oval"].includes(borderType?.toLowerCase())
        ? "1px solid black"
        : transparent
        ? "none"
        : label && label?.trim() !== ""
        ? "1px solid black" // button con label
        : "none"; // button icon sin borde
    }};
    font-family: ${FontFamily.RobotoMedium}, sans-serif;
    font-size: var(--size);
    line-height: 1.2;
    text-transform: none;

    // tipos de botones fill
    &.fill {
      &.white {
        background-color: white;
        color: #e33aa9;
        border-color: #e33aa9;
        &:hover {
          background-color: #f4f4f4;
        }
      }
      &.whiteS3 {
        background-color: white;
        color: #262626;
        border-color: #f0f0f0;
        &:hover {
          background-color: #f4f4f4;
        }
      }
      &.pink {
        background-color: #e33aa9;
        color: white;
        border-color: #e33aa9;
        &:hover {
          background-color: #b42983;
        }
      }
      &.purpleS2 {
        background-color: #8a6caa;
        color: white;
        border-color: #8a6caa;
        &:hover {
          background-color: #61467e;
        }
      }
    }

    .icon,
    .iconLoading {
      display: grid;
      place-items: center;
      color: inherit;
      font-size: ${({ label }) => {
        return label && label?.trim() !== ""
          ? "calc(var(--size) + 3px)" // button with label
          : "var(--size)"; // button icon
      }};
    }
    .iconLoading {
      font-size: ${({ icon }) => !icon && "var(--size)"};
    }

    // mismo estilo desabilitado para cualquier tipo de boton
    &:disabled {
      background-color: #fcebf7 !important;
      color: #7b7979 !important;
      border-color: #7b7979 !important;

      .icon {
        color: #9e9c9c !important;
      }
      .iconLoading {
        color: #9e2674 !important;
      }

      &:hover {
        background-color: #fcebf7 !important;
      }
    }
  }
`;

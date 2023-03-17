import { FontFamily } from "../../global-files/variables";
import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;

  .containerIntern {
    width: inherit;
    border: inherit;
    border-radius: inherit;

    > * {
      width: inherit;
      border: inherit;
      border-radius: inherit;
    }
  }

  > .MuiTooltip-popper {
    background-color: transparent;

    .dropdownMenu {
      --background: white;
      box-shadow: 0px 0px 10px 1px gray;
      background-color: var(--background);
      padding: 0px 0px;
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      gap: 0px;
      overflow: auto;
      max-width: ${({ maxWidthDropdown }) =>
        maxWidthDropdown ? maxWidthDropdown : "400px"};
      max-height: ${({ maxHeightDropdown }) =>
        maxHeightDropdown ? maxHeightDropdown : "80vh"};

      .dropdownItem {
        width: 100%;
        border-radius: 0px;
        border: none;

        .button {
          justify-content: flex-start;
          border: inherit;
          text-align: left;
          font-family: ${FontFamily.RobotoRegular};
          padding: 10px;
          gap: 11px;

          .icon {
            font-size: calc(var(--size) + 1px);
            opacity: 0.75;
          }
        }

        &.iconDefault .button .icon {
          opacity: 0;
        }
      }
    }

    &[data-popper-placement*="bottom"] .dropdownMenu {
      margin-top: 10px;
    }
    &[data-popper-placement*="top"] .dropdownMenu {
      margin-bottom: 10px;
    }
    &[data-popper-placement*="left"] .dropdownMenu {
      margin-right: 10px;
    }
    &[data-popper-placement*="right"] .dropdownMenu {
      margin-left: 10px;
    }
  }
`;

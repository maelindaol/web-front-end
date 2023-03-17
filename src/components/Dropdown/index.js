import { useState } from "react";
import { ClickAwayListener, Fade, Tooltip as TooltipMUI } from "@mui/material";
import { Container } from "./styles";
import React from "react";
import { Button } from "../Button";
import { faCircle as IconDefault } from "@fortawesome/free-solid-svg-icons";
import { isArrayEmpty, isStringEmpty } from "../../utils/validations";

/* Este es un menu de opciones tipo select donde cada item
es un boton con su propio onClick */
export const Dropdown = (props) => {
  const {
    items,
    triggerType, // (string) "hover" | "click"
    children, // componente hijo activador del dropdown
    maxWidthDropdown, // string
    maxHeightDropdown, // string
    className, // (string) clase del container select
    classNameDropdown, // (string) clase del contenedor tooltip
    positionDropdown, // (string) posicion del contenedor tooltip (values en object positions)
  } = props;
  const positions = {
    rightStart: "right-start",
    leftStart: "left-start",
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const renderItems = () => {
    const customItems = [];
    if (!isArrayEmpty(items)) {
      const useIconDefault = items.some((item) => {
        return item.icon ? true : false;
      });
      items.forEach((item, index) => {
        customItems.push(
          <Button
            key={"item-" + index}
            className={
              "dropdownItem" +
              (useIconDefault ? (item.icon ? "" : " iconDefault") : "")
            }
            type={"whiteS3"}
            borderType={undefined}
            size={12}
            disabled={item.disabled}
            isLoading={item.isLoading}
            label={isStringEmpty(item.label) ? undefined : item.label}
            icon={useIconDefault ? item.icon ?? IconDefault : undefined}
            onClick={(event) => {
              event.stopPropagation();
              setTimeout(() => {
                setShowDropdown(false);
                item.onClick && item.onClick(event);
              }, 200);
            }}
          />
        );
      });
    }
    return customItems;
  };

  return (
    <ClickAwayListener
      onClickAway={(event) => {
        if (triggerType !== "hover") setShowDropdown(false);
      }}
    >
      <Container
        className={!isStringEmpty(className) ? className : ""}
        maxWidthDropdown={maxWidthDropdown}
        maxHeightDropdown={maxHeightDropdown}
        onMouseEnter={(event) => {
          if (triggerType === "hover") {
            setShowDropdown(true);
          }
        }}
        onMouseLeave={(event) => {
          if (triggerType === "hover") {
            setShowDropdown(false);
          }
        }}
      >
        <TooltipMUI
          placement={positions[positionDropdown] ?? positions.bottomStart}
          open={showDropdown}
          arrow={false}
          componentsProps={{
            tooltip: {
              className:
                "dropdownMenu" +
                (isStringEmpty(classNameDropdown)
                  ? ""
                  : " " + classNameDropdown),
            },
            popper: { disablePortal: true },
            transition: { timeout: 300 },
          }}
          TransitionComponent={Fade}
          enterDelay={100}
          followCursor={false}
          disableFocusListener
          disableTouchListener
          disableHoverListener
          title={<>{renderItems()}</>}
        >
          <div
            className="containerIntern"
            onClick={(event) => {
              if (triggerType !== "hover") {
                setShowDropdown(!showDropdown);
              }
            }}
          >
            {children}
          </div>
        </TooltipMUI>
      </Container>
    </ClickAwayListener>
  );
};

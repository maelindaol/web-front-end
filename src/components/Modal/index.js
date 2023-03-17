import React from "react";
import { ContainerModal } from "./styles";
import xIcon from "../../assets/images/fail.svg";
import successIcon from "../../assets/images/success.svg";
import {
  faExclamationTriangle as warningIcon,
  faExclamation as infoIcon,
} from "@fortawesome/free-solid-svg-icons";
import { Fade, Modal as ModalMUI, Backdrop } from "@mui/material";
import { Button } from "../Button";
//import { CustomIcon } from "../../atoms/CustomIcon";

export const Modal = (props) => {
  const {
    className, // clases CSS del componente raiz del modal
    show, // boolean
    title, // string
    message, // string
    icon, // "error" | "warning" | "success" | "info" | (por default no icon)
    customComponent, // JSX
    buttons, // array<JSX>
    onClickModal, // (event) => {}
    onClickBtnDefault, // (event) => {}
  } = props;
  const icons = {
    error: xIcon,
    warning: warningIcon,
    info: infoIcon,
    success: successIcon,
  };

  return (
    <Backdrop
      open={show}
      className="container-backgroundModal"
      timeout={400}
      style={{
        backgroundColor: "transparent",
        zIndex: 10,
      }}
      onClick={(event) => onClickModal && onClickModal(event)}
    >
      <Fade in={show} timeout={400}>
        <ContainerModal className={className ? className : ""}>
          <div className="contentModal">
            <header>
              {/* titulo */}
              {![null, undefined, ""].includes(title?.trim()) && (
                <label className="label-title">{title.trim()}</label>
              )}
            </header>

            {/* icono modal */}
            {icons[icon?.toLowerCase()] && (
              <img src={icons[icon.toLowerCase()]}></img>
            )}

            {/* label message */}
            {![null, undefined, ""].includes(message?.trim()) && (
              <label className="label-message"> {message.trim()} </label>
            )}

            {/* custom component */}
            {customComponent && (
              <div className="container-customComponent">{customComponent}</div>
            )}

            {/* container buttons */}
            <div className="container-buttons">
              {buttons?.length ? (
                buttons
              ) : (
                <Button
                  key={"btn-Aceptar"}
                  type={"white"}
                  borderType={"oval"}
                  label={"Aceptar"}
                  size={12}
                  onClick={(event) =>
                    onClickBtnDefault && onClickBtnDefault(event)
                  }
                />
              )}
            </div>
          </div>
        </ContainerModal>
      </Fade>
    </Backdrop>
  );
};

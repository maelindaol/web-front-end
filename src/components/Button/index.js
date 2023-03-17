import { Container } from "./styles";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSpinner as iconLoading } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Button = (props) => {
  const {
    id,
    keyId,
    className,
    disabled,
    type, // white | whiteS2 | whiteS3 | whiteS4 | pink | gray | purple | purpleS2 | black => por default (white)
    transparent, // boolean => por default (NO transparent)
    label,
    size, // number ... label? size -> label && icon adaptable : size -> icon
    borderType, // rectangle | oval | circle
    icon, // icon fontawesome
    isLoading, // boolean
    onClick,
  } = props;

  return (
    <Container
      id={id}
      key={keyId}
      className={className}
      type={type}
      transparent={transparent}
      borderType={borderType}
      iconPosition={"left"}
      icon={icon}
      label={label}
      size={size}
      disabled={disabled}
      isLoading={isLoading}
    >
      <button
        className={
          "button " +
          (["white", "whiteS3", "pink", "purpleS2"].includes(type)
            ? type
            : "white") +
          " fill"
        }
        variant={"text"}
        disabled={disabled || isLoading}
        onClick={async (event) => onClick && (await onClick(event))}
      >
        {isLoading ? (
          <>
            <i className="iconLoading">
              <Icon pulse={true} icon={iconLoading} />
            </i>
            {label && label}
          </>
        ) : (
          <>
            {icon && (
              <i className="icon">
                <Icon icon={icon} />
              </i>
            )}
            {label && label}
          </>
        )}
      </button>
    </Container>
  );
};

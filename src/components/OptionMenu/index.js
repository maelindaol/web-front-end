import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { isArrayEmpty, isObject } from "../../utils/validations";
import { Container } from "./styles";
import IconMenu from "../../assets/images/menu.svg";
import { faSave as IconSave } from "@fortawesome/free-solid-svg-icons";

export default function OptionMenu(props) {
  const {
    menuItems,
    saveButton /* {
      loading: boolean
      disabled: boolean
      onClick: (event) => {}
    } */,
    positionDropdownMenu, // (string) => RIGHT | LEFT
  } = props;

  return (
    <Container>
      {/* boton guardar */}
      {isObject(saveButton) && saveButton.onClick && (
        <Button
          className={"button-save"}
          type={"pink"}
          size={11}
          borderType={"circle"}
          icon={IconSave}
          isLoading={saveButton.loading}
          disabled={saveButton.disabled}
          onClick={(event) => {
            event.stopPropagation();
            saveButton.onClick(event);
          }}
        />
      )}
      {/* menu de opciones */}
      {!isArrayEmpty(menuItems) && (
        <Dropdown
          items={menuItems}
          triggerType={"hover"}
          maxWidthDropdown={"400px"}
          maxHeightDropdown={"50vh"}
          className={"dropdownMenu"}
          classNameDropdown={"menuPopUp"}
          positionDropdown={
            positionDropdownMenu === "RIGHT" ? "rightStart" : "leftStart"
          }
        >
          <img src={IconMenu}></img>
        </Dropdown>
      )}
    </Container>
  );
}

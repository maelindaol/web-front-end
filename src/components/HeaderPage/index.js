import { Container } from "./styles";
import { useState } from "react";
import { Button } from "../Button/index";
import { faPlus as IconAdd } from "@fortawesome/free-solid-svg-icons";
import { ModalTask } from "../ModalTask";

export const HeaderPage = (props) => {
  const { title } = props;

  const [showModalAddTask, setShowModalAddTask] = useState(false);

  return (
    <>
      <Container>
        <div className="contentHeader">
          <p className="labelTitle">{title}</p>
          <div className="container-userMenu">
            <Button
              className="buttonAddRelease"
              type="purpleS2"
              size={18}
              icon={IconAdd}
              borderType="circle"
              onClick={(event) => {
                setShowModalAddTask(true);
              }}
            />
          </div>
        </div>
      </Container>

      {/* modal add tarea */}
      {showModalAddTask && (
        <ModalTask onClickCancel={(event) => setShowModalAddTask(false)} />
      )}
    </>
  );
};

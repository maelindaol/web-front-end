import { Container } from "./styles";
import { useEffect, useState } from "react";
import { EmptyPage } from "../EmptyPage";
import { isStringEmpty } from "../../utils/validations";
import { DeleteTask, UpdateTask } from "../../services/service.js";
import OptionMenu from "../OptionMenu";
import {
  faPen as IconEdit,
  faTrash as IconDelete,
} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../Modal";
import { Button } from "../Button";

// tarea seleccionada
export default function SelectedProject(props) {
  const {
    id, // number
    endDate, // date
    title, // string
    description, // string
    status, // string (depende fecha de entrega)
  } = props;

  const [editMode, setEditMode] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [disabledSaveButton, setDisabledSaveButton] = useState(false);
  const [action, setAction] = useState();
  const [modalWarning, setModalWarning] = useState({
    show: false,
    title: "",
    message: "",
    labelCancelButton: "",
    showSaveButton: undefined,
    showDeleteButton: undefined,
  });
  const actions = {
    CLICK_SAVE: 1,
    CLICK_DELETE: 2,
  };

  // // establecer el valor inicial del input title
  useEffect(() => {
    if (isStringEmpty(title)) setInputTitle("");
    else setInputTitle(title);
  }, [title]);

  // // establecer el valor inicial del input descripcion
  useEffect(() => {
    if (isStringEmpty(description)) setInputDescription("");
    else setInputDescription(description);
  }, [description]);

  // // habilitar / desabilitar boton guardar cada que se haga un cambio
  useEffect(() => {
    validateSave();
  }, [inputTitle, inputDescription]);

  // cada que se ejecute una accion al backend
  useEffect(() => {
    switch (action) {
      case actions.CLICK_SAVE:
        onUpdateTask();
        break;
      case actions.CLICK_DELETE:
        onDeleteTask();
        break;
    }
  }, [action]);

  const validateSave = () => {
    // validar si title es diferente
    if (!isStringEmpty(inputTitle)) {
      if (isStringEmpty(title) || title.trim() !== inputTitle.trim()) {
        setDisabledSaveButton(false);
        return;
      }
    }

    // validar si description es diferente
    if (!isStringEmpty(inputDescription)) {
      if (
        isStringEmpty(description) ||
        description.trim() !== inputDescription.trim()
      ) {
        setDisabledSaveButton(false);
        return;
      }
    }

    // cuando se tienen los mismos valores
    setDisabledSaveButton(true);
  };

  const onDeleteTask = async () => {
    const response = await DeleteTask(id);
    // cuando hay error
    if (response) {
      setModalWarning({
        show: true,
        title: "fail",
        message: "Hubo un problema al eliminar la tarea",
        labelCancelButton: "Aceptar",
      });
      return;
    } else {
      setModalWarning({
        show: true,
        title: "success",
        message: "La tarea ha sido eliminada",
        labelCancelButton: "Aceptar",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1700);
    }
    setAction();
  };

  const onUpdateTask = async () => {
    let newTitle;
    let newDescription;
    if (
      !isStringEmpty(inputTitle) &&
      (isStringEmpty(title) || title.trim() !== inputTitle.trim())
    ) {
      newTitle = inputTitle.trim();
    }
    // change description?
    if (
      !isStringEmpty(inputDescription) &&
      (isStringEmpty(description) ||
        description.trim() !== inputDescription.trim())
    ) {
      newDescription = inputDescription.trim();
    }
    const response = await UpdateTask(id, newTitle, newDescription);
    // cuando hay error
    if (response) {
      setModalWarning({
        show: true,
        title: "fail",
        message: "Hubo un problema al actualizar la tarea",
        labelCancelButton: "Aceptar",
      });
      return;
    } else {
      setModalWarning({
        show: true,
        title: "success",
        message: "Cambios guardados con exito",
        labelCancelButton: "Aceptar",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1700);
    }
    setAction();
    setEditMode(false);
  };

  /*------------------------------------
  FUNCIONES DE RENDERIZADO
  -------------------------------------- */
  const renderTitle = () => {
    return editMode ? (
      <input
        className="inputTitle"
        placeholder="Título del proyecto"
        value={inputTitle}
        onChange={(event) => {
          setInputTitle(event.target.value);
        }}
      />
    ) : (
      <label className="label-title">
        {!isStringEmpty(title) ? title : "Título no definido"}
      </label>
    );
  };

  const renderModalButtons = () => {
    const hideModalWarning = () => {
      setModalWarning({
        show: false,
        title: "",
        message: "",
      });
    };
    const buttons = [
      <Button
        key={"buttonDefault"}
        className="buttonDefault"
        type="white"
        label={
          !isStringEmpty(modalWarning.labelCancelButton)
            ? modalWarning.labelCancelButton
            : "Cancelar"
        }
        borderType="oval"
        onClick={(event) => {
          hideModalWarning();
        }}
      />,
    ];
    if (modalWarning.showSaveButton) {
      buttons.push(
        <Button
          key={"buttonSave"}
          className="buttonSave"
          type="pink"
          label="Guardar"
          borderType="oval"
          onClick={(event) => {
            hideModalWarning();
            setAction(actions.CLICK_SAVE);
          }}
        />
      );
    } else if (modalWarning.showStatusButton) {
      buttons.push(
        <Button
          key={"buttonStatus"}
          className="buttonStatus"
          type="pink"
          label={status === "IN_PROGRESS" ? "Finalizar" : "Comenzar"}
          borderType="oval"
          onClick={(event) => {
            hideModalWarning();
            setAction(actions.CLICK_STATUS);
          }}
        />
      );
    } else if (modalWarning.showDeleteButton) {
      buttons.push(
        <Button
          key={"buttonDelete"}
          className="buttonDelete"
          type="pink"
          label={"Eliminar"}
          borderType="oval"
          onClick={(event) => {
            hideModalWarning();
            setAction(actions.CLICK_DELETE);
          }}
        />
      );
    }
    return buttons;
  };

  return (
    <Container>
      {id != undefined ? (
        <>
          {/* Datos del proyecto */}
          <div className="containerData">
            {/* container header */}
            <div className="containerHeader">
              {/* container title y date */}
              <div className="container-info">
                {/* title */}
                {renderTitle()}
                {/* label date */}
                {!isStringEmpty(endDate) && (
                  <label className="label-date">{endDate}</label>
                )}
              </div>
              {/* menu de opciones */}
              <OptionMenu
                positionDropdownMenu={"LEFT"}
                saveButton={
                  editMode
                    ? {
                        loading: action && action === actions.CLICK_SAVE,
                        disabled:
                          disabledSaveButton ||
                          (action && action !== actions.CLICK_SAVE),
                        onClick: (event) => {
                          setModalWarning({
                            show: true,
                            title: "Editar tarea",
                            message: "¿Está seguro de guardar los cambios?",
                            showSaveButton: true,
                          });
                        },
                      }
                    : undefined
                }
                menuItems={[
                  {
                    label: editMode ? "Cancelar edición" : "Editar tarea",
                    icon: IconEdit,
                    disabled: action ? true : false,
                    onClick: (event) => {
                      setEditMode(!editMode);
                    },
                  },
                  {
                    label: "Eliminar tarea",
                    icon: IconDelete,
                    disabled: action && action !== actions.CLICK_DELETE,
                    isLoading: action === actions.CLICK_DELETE,
                    onClick: (event) => {
                      setModalWarning({
                        show: true,
                        title: "Eliminar tarea",
                        message: "¿Está seguro que desea eliminar la tarea?",
                        showDeleteButton: true,
                      });
                    },
                  },
                ]}
              />
            </div>
            <hr />

            {/* contenedor de botones seccion 2 */}
            <div className="buttonsSection2">
              {/* boton change status */}
              {!isStringEmpty(status) && (
                <div className={"label-status "}>{status}</div>
              )}
            </div>
            <hr />
            {/* descripcion */}
            <textarea
              className="inputDescription"
              placeholder="Descripción del proyecto"
              rows={6}
              disabled={editMode ? false : true}
              value={inputDescription}
              onChange={(event) => {
                setInputDescription(event.target.value);
              }}
            />
          </div>
        </>
      ) : (
        <EmptyPage
          className="container-emptyPage"
          label="Selecciona una tarea para visualizarla"
        />
      )}

      {/* modal advertencia */}
      {modalWarning.show && (
        <Modal
          className={"modalWarning"}
          show={modalWarning.show}
          title={modalWarning.title}
          message={modalWarning.message}
          buttons={renderModalButtons()}
        />
      )}
    </Container>
  );
}

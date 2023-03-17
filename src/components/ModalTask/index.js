//components
import { Container } from "./styles";
import { Calendar } from "../Calendar";
import { Button } from "../Button";
import moment from "moment";
import { Modal } from "../../components/Modal";
import { InsertTask } from "../../services/service.js";
import addProjectTitle from "../../assets/images/addProjectTittle.svg";
import { useEffect, useState } from "react";
import { isStringEmpty } from "../../utils/validations";

export const ModalTask = ({
  onClickCancel, // evento click en el boton "cancelar"
}) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [rangeDates, setRangeDates] = useState({});
  const [focusInputTitle, setFocusInputTitle] = useState(false);
  const [disabledButtonAddEdit, setDisabledButtonAddEdit] = useState(true);
  const [loadingButtonAddEdit, setLoadingButtonAddEdit] = useState(false);
  const [modalAlert, setModalAlert] = useState({
    show: false,
    title: "",
    message: "",
    icon: undefined,
  });

  useEffect(() => {
    validateAdd();
  }, [inputTitle, inputDescription]);

  const onClickButtonAdd = async () => {
    setLoadingButtonAddEdit(true);
    // add la nueva tarea en la BD
    const response = await InsertTask(
      inputTitle,
      inputDescription,
      `${moment(rangeDates.estimatedStartDate).format("l")}-${moment(
        rangeDates.estimatedDate
      ).format("l")}`
    );
    // cuando hay error
    if (response) {
      setModalAlert({
        show: true,
        title: "fail",
        message: "Hubo un problema al agregar la tarea",
        icon: "error",
      });
      return;
    } else {
      setModalAlert({
        show: true,
        title: "success",
        message: "Tarea agregada",
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 1700);
    }
    setLoadingButtonAddEdit(false);
    setInputTitle("");
    setInputDescription("");
    setRangeDates({});
  };

  const validateAdd = () => {
    let disabled = false;
    // validar titulo
    if (isStringEmpty(inputTitle)) {
      disabled = true;
    }
    // validar descripcion
    else if (isStringEmpty(inputDescription)) {
      disabled = true;
    }

    setDisabledButtonAddEdit(disabled);
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setRangeDates({
      estimatedStartDate: start,
      estimatedDate: end,
    });
  };

  return (
    <>
      <Container
        className={"modalAddTask"}
        show={true}
        title={"Añadir Tarea"}
        customComponent={
          <>
            {/* input titulo */}
            <div
              className={
                "container-inputTitle" + (focusInputTitle ? " active" : "")
              }
            >
              <img src={addProjectTitle} alt="add" />
              <input
                className="inputTitle"
                placeholder="Nombre de la tarea"
                value={inputTitle}
                onChange={(event) => {
                  setInputTitle(event.target.value);
                }}
                onFocus={(event) => setFocusInputTitle(true)}
                onBlur={(event) => setFocusInputTitle(false)}
              />
            </div>

            {/* input descripcion */}
            <textarea
              className="inputDescription"
              placeholder="Describe la tarea"
              rows={3}
              value={inputDescription}
              onChange={(event) => {
                setInputDescription(event.target.value);
              }}
            />

            <div className="container-dataGrid">
              {/* select fecha de entrega */}
              <label className="label-title">Fecha estimada</label>
              <div className="container-rangeCalendar">
                <Calendar
                  onChange={onChange}
                  startDate={rangeDates.estimatedStartDate}
                  endDate={rangeDates.estimatedDate}
                />
              </div>
            </div>
          </>
        }
        buttons={[
          <Button
            key={"modal-buttonCancel"}
            className="modal-buttonCancel"
            type="white"
            label={"Cancelar"}
            borderType="oval"
            onClick={(event) => {
              onClickCancel && onClickCancel(event);
            }}
          />,
          <Button
            key={"modal-buttonAdd"}
            className="modal-buttonAdd"
            type="pink"
            label={"Añadir"}
            borderType="oval"
            disabled={disabledButtonAddEdit}
            isLoading={loadingButtonAddEdit}
            onClick={onClickButtonAdd}
          />,
        ]}
      />
      {/* modal de alertas */}
      {modalAlert.show && (
        <Modal
          className="ticketsPage-modal"
          show={modalAlert.show}
          title={modalAlert.title}
          message={modalAlert.message}
          icon={modalAlert.icon}
          onClickBtnDefault={(event) => {
            setModalAlert({
              show: false,
              title: "",
              message: "",
              icon: undefined,
            });
          }}
        />
      )}
    </>
  );
};

import { Container } from "./styles";
import { EmptyPage } from "../../components/EmptyPage";
import SelectedProject from "../../components/SelectedProject";
import { HeaderPage } from "../../components/HeaderPage";
import SubscriptionCardList from "../../components/SubscriptionCardContainer";
import { GetAll } from "../../services/service.js";
import moment from "moment";
import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { useHistory, useLocation } from "react-router-dom";

export default function TasksUser(props) {
  const history = useHistory();
  const location = useLocation();
  const [dataTasks, setDataTasks] = useState(false);
  const [selectedTask, setSelectedTask] = useState(false);
  const [modalAlert, setModalAlert] = useState({
    show: false,
    title: "",
    message: "",
    icon: undefined,
  });

  useEffect(() => {
    GetAll().then((value) => {
      setDataTasks(value);
    });
  }, []);

  useEffect(() => {
    console.log("data", dataTasks);
    console.log(dataTasks.length);
  }, [dataTasks]);

  const renderSelectedRelease = () => {
    let status = "NOT DELIVERY TODAY";
    const dateStatus = selectedTask?.date?.split("-")[1];
    if (moment(new Date()).format("l") === dateStatus)
      status = "DELIVERY TODAY";
    return (
      <SelectedProject
        id={selectedTask.id}
        title={selectedTask?.title}
        description={selectedTask?.description}
        endDate={selectedTask?.date}
        status={status}
      />
    );
  };

  // evento click de una tarjeta
  const onClickCard = (id, title, date, description) => {
    setSelectedTask({
      id: id,
      title: title,
      date: date,
      description: description,
    });
    history.replace({ pathname: "/Task/" + id, state: location.state });
  };

  return (
    <>
      <Container>
        <HeaderPage title={"Tareas"} />
        <div className={"contentPage"}>
          {dataTasks.length < 0 ? (
            <EmptyPage
              className="container-emptyTasks"
              label={"No hay tareas para mostrar"}
            />
          ) : (
            <>
              <SubscriptionCardList
                className="releaseList"
                dataFullReleases={{
                  releaseList: dataTasks,
                }}
                onClickCard={onClickCard}
                selectedId={selectedTask.id}
              />
            </>
          )}
          {/* Vista de la tarea selecionada */}
          {renderSelectedRelease()}
        </div>
      </Container>

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
}

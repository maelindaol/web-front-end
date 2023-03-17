import { isArrayEmpty, isObject, isStringEmpty } from "../../utils/validations";
import SubscriptionCard from "./SubscriptionCard";
import { Container } from "./styles";
import moment from "moment";

export default function SubscriptionCardList(props) {
  const {
    className,
    dataFullReleases,
    cardListTitle, // (string) titulo de la lista de tarjetas
    emptyListTitle, // (string) texto que aparece cuando no hay lista de tarjetas
    selectedId, // (number) ID del ticket o proyecto seleccionado
    onClickCard, // (id) => {}
  } = props;

  const renderFullReleasesList = () => {
    const listJSX = [];
    if (!isArrayEmpty(dataFullReleases?.releaseList)) {
      dataFullReleases.releaseList.forEach((release, index) => {
        listJSX.push(createCardRelease(release, "releaseCard-" + index));
      });
    }

    // render
    return renderLists([], listJSX);
  };

  const createCardRelease = (release, key) => {
    // status de la tarea
    let status = "NOT DELIVERY TODAY";
    const dateStatus = release?.date?.split("-")[1];
    if (moment(new Date()).format("l") === dateStatus)
      status = "DELIVERY TODAY";

    // diseño de la tarjeta
    return (
      <SubscriptionCard
        key={key}
        id={release.id}
        isSelected={selectedId !== undefined && release.id === selectedId}
        title={{
          label: release.title,
          tooltipTitle: "Título de la tarea",
        }}
        dates={{
          endDate: release.date,
          visibleDate: "endDate",
        }}
        description={release.description}
        statusLegend={status}
        onClickCard={onClickCard}
      />
    );
  };

  const renderLists = (fixedCardList = [], cardList = []) => {
    // render
    return (
      <>
        {/* lista de tarjetas */}
        {cardList.length > 0 ? (
          <div className="container-cardList">
            {/* title */}
            {
              <label className="label-subtitle">
                {isStringEmpty(cardListTitle) ? "Lista tareas" : cardListTitle}
              </label>
            }
            {/* lista */}
            <div className="containerList">{cardList}</div>
          </div>
        ) : (
          <>
            {/* lista vacia */}
            <div className="container-emptyList">
              <label>
                {isStringEmpty(emptyListTitle) ? "Lista vacía" : emptyListTitle}
              </label>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <Container className={isStringEmpty(className) ? "" : className}>
      {/* lista de releases */}
      {isObject(dataFullReleases) && renderFullReleasesList()}
    </Container>
  );
}

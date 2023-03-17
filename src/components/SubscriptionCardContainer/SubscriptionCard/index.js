import { isStringEmpty } from "../../../utils/validations";
import { Container } from "./styles";

export default function SubscriptionCard(props) {
  const {
    isSelected, // (boolean)  => tarjeta seleccionada?
    className,
    id, // ID de la tarea
    title,
    dates,
    description, // (string) descripcion de la tarjeta
    statusLegend, // string (de acuerdo a la fecha de entrega)
    onClickCard, // (id , redirectURL) => {}
  } = props;

  return (
    <Container
      className={"SubscriptionCard" + (className ? " " + className : "")}
      isSelected={isSelected}
      onClick={(event) => {
        onClickCard &&
          onClickCard(id, title?.label, dates?.endDate, description);
      }}
    >
      <div className="containerHeader">
        {/* container title y date */}
        <div className="container-info">
          {/* label title */}
          {!isStringEmpty(title?.label) && (
            <label className="label-title">{title.label}</label>
          )}
          {/* label date */}
          {!isStringEmpty(dates?.endDate) && (
            <label className="label-date">{dates?.endDate}</label>
          )}
        </div>
      </div>

      {/* description */}
      {!isStringEmpty(description) && (
        <label className="label-descripcion">{description}</label>
      )}

      <div className="containerLegends">
        {/* status */}
        {!isStringEmpty(statusLegend) && (
          <label className="label-info">{statusLegend}</label>
        )}
      </div>
    </Container>
  );
}

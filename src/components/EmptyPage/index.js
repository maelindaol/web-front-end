import { Container } from "./styles";
import IconHi from "../../assets/images/IconHi.svg";
import { isStringEmpty } from "../../utils/validations";

export const EmptyPage = (props) => {
  const {
    className, // (string) clases CSS del componente
    label, // (string) texto a visualizar
  } = props;

  return (
    <Container className={isStringEmpty(className) ? "" : className}>
      <img src={IconHi} alt="icon empty projects" className="empty-hi-img" />
      <label className="empty-hi">
        {isStringEmpty(label) ? "Selecciona algo para visualizarlo" : label}
      </label>
    </Container>
  );
};

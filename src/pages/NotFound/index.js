import notFound from "../../assets/images/NotFound/notFound.svg";

import { Container } from "./styles";

export const NotFound = () => {
  return (
    <Container>
      <img src={notFound} alt="page not found" />
      <h2>Lo sentimos, la página que buscas no existe</h2>
    </Container>
  );
};

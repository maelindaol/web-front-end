import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TasksUser from "./pages/TasksUser/App";
import { Container, ContainerPage } from "./styles";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <Container>
      <Router>
        <ContainerPage>
          <Switch>
            <Route exact path={["/Task/:id", "/Task", "/"]}>
              <TasksUser />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </ContainerPage>
      </Router>
    </Container>
  );
}

export default App;

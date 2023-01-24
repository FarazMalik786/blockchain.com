
import './App.css';
import { BrowserRouter, Routes, Route ,Router, Switch} from "react-router-dom";
import routes from './routes';
import LogIn from "./User/Auth/LogIn/LogIn"
import LogInWithNumio from "./User/Auth/LogInWithNumio/LogInWithNumio"
import SignUp from "./User/Auth/SignUp/SignUp"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home"
import Proposals from "./Pages/Proposals/Proposals"
import Votes from './Pages/Votes/Votes'
import ActiveProjects from './Pages/ActiveProjects/ActiveProjects'
import Rewards from "./Pages/Rewards/Rewards"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Router>
          <Switch>
            <Route path={routes.auth.root()} render={() =>
              <Switch>
                <Route path={routes.auth.logIn()} component={LogIn} />
                <Route path={routes.auth.logInWithNumio()} component={LogInWithNumio} />
                <Route path={routes.auth.signUp()} component={SignUp} />
              </Switch>
            } />
            <Route render={() =>
              <Layout>
                <Switch>
                  <Route path={routes.root()} exact component={Home} />
                  <Route path={routes.proposals()} exact component={Proposals} />
                  <Route path={routes.votes()} exact component={Votes} />
                  <Route path={routes.activeProjects()} exact component={ActiveProjects} />
                  <Route path={routes.rewards()} exact component={Rewards} />
                </Switch>
              </Layout>
            } />
          </Switch>
        </Router>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

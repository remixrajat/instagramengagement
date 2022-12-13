import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Creators from "./pages/Creators";
import MyCampaign from "./pages/MyCampaign";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/creators">
          <Creators />
        </Route>
        <Route path="/campaign">
          <MyCampaign />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

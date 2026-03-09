import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import AnaSayfa from "./Pages/AnaSayfa";
import SiparisFormu from "./Pages/SiparisFormu";
import Onay from "./Pages/Onay";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact> 
        <AnaSayfa />
      </Route>
      <Route path="/siparis"> 
        <SiparisFormu />
      </Route>
      <Route path="/onay"> 
        <Onay />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
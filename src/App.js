import { Switch, Route } from "react-router-dom";

import { MainPage } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  );
}

export default App;

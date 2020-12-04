import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import { store } from "./store";

import './App.css';
import Auth from './containers/auth';
import Todos from "./containers/todos";

function App() {
  return (
    <Provider store={store}>
    <Router history={createHistory}>
     <div className="container">
        <div className="App">
        <Route exact path="/" component={Auth} />
        <Route exact path="/todos" component={Todos} />
      </div>
    </div>
  </Router>
  </Provider>
  );
}

export default App;

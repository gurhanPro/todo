import { Provider } from "react-redux";
import { store } from "./store";

import './App.css';
import Auth from './containers/auth';

function App() {
  return (
    <Provider store={store}>
     <div className="container">
        <div className="App">
        <Auth />
        </div>
    </div>
  </Provider>
  );
}

export default App;

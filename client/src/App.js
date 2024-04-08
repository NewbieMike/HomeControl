import { React } from "react";
import PropTypes from "prop-types";
// import Header from "./Header";
const App = () => {
  return <div className="App">App</div>;
};

App.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { App, App as AppComponent };

export default App;

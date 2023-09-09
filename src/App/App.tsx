import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Home from "../components/Home";

// TODO: Add icons one by one to the library so we don't import the entire library
library.add(fas);

export function App() {
  return <Home />;
}

export default App;

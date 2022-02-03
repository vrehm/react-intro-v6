import { render } from "react-dom";
import { StrictMode } from "react";
import SearchParams from "./search-params";

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

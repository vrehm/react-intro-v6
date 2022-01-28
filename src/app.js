import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt Me!</h1>
      <Pet name="Thelma" animal="Cat" breed="European Shorthair" />
      <Pet name="Louise" animal="Cat" breed="European Longhair" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

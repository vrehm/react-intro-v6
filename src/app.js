import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
    React.createElement(Pet, {
      name: "Thelma",
      animal: "Cat",
      breed: "European Shorthair",
    }),
    React.createElement(Pet, {
      name: "Louise",
      animal: "Cat",
      breed: "European Longhair",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

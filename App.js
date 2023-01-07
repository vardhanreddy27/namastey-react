import React from "react";
import ReactDOM from "react-dom/client";
const element = React.createElement("div", { id: "title" }, "first");
const head6 = React.createElement(
  "h6",
  { className: "akash" },
  "Hello, world! of least head size"
);
const rele = ReactDOM.createRoot(document.getElementById("root"));
const reles = ReactDOM.createRoot(document.getElementById("roots"));
rele.render(element);
reles.render(head6);

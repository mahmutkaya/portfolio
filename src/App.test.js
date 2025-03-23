import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  unmountComponentAtNode(div);
});
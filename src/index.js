import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TasksStateContextProvider } from "./contexts/TaskContext";

const insertionPoint = document.createElement("div");
insertionPoint.setAttribute("id", "insertionPoint");
document.body.prepend(insertionPoint);

ReactDOM.render(
  <React.StrictMode>
    <TasksStateContextProvider>
      <App />
    </TasksStateContextProvider>
  </React.StrictMode>,
  // document.getElementById('root')
  insertionPoint
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TasksStateContextProvider } from "./contexts/TaskContext";

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
link.rel = "stylesheet";
document.head.append(link)

const taskTracker = document.createElement("div");
document.body.append(taskTracker);
taskTracker.id = "taskTracker"

ReactDOM.render(
  <React.StrictMode>
    <TasksStateContextProvider>
      <App />
    </TasksStateContextProvider>
  </React.StrictMode>,
  taskTracker
);

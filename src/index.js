import React from "react";
import ReactDOM from "react-dom";
import { observable } from "mobx";

import App from "./App";

class TodoList {
  @observable
  todos = [];
}

const store = new TodoList();

ReactDOM.render(<App store={store} />, document.getElementById("root"));

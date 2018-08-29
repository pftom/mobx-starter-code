import React from "react";
import ReactDOM from "react-dom";
import { observable } from "mobx";

import App from "./App";

class TodoList {
  @observable
  todos = [
    {
      title: "先玩一下 mobx",
      id: 0
    },
    {
      title: "然后做一个网站",
      id: 1
    },
    {
      title: "网站大热，获得千万投资",
      id: 2
    },
    {
      title: "成为高富帅，赢取白富美，走上人生巅峰，✌️",
      id: 3
    },
    {
      title: "想想只是一场梦 😭",
      id: 4
    }
  ];
}

const store = new TodoList();

ReactDOM.render(<App store={store} />, document.getElementById("root"));

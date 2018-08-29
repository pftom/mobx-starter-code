import React, { Component } from "react";

class App extends Component {
  render() {
    console.log("store", this.props.store);
    const todos = [
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

    return (
      <div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class App extends Component {
  render() {
    console.log("store", this.props.store);
    const { todos } = this.props.store;
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

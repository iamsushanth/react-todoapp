import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './addForm';


class App extends Component {
  state = {
    todos: [
      { id:1, content: 'Read Some Books'},
      { id:2, content: 'play Games'}
    ]

  }
  deleteTodos = (id) =>{
    const todos= this.state.todos.filter(todos => {
      return todos.id!== id
    });
    this.setState({
      todos
    })

  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    });


  }
  render() {
    return (
      <div className="App container">
      <div class="row">
      <div class="col s10">
        <h1 className="center red-text">Todo's</h1>
       <Todos todos={this.state.todos} deleteTodos={this.deleteTodos} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;

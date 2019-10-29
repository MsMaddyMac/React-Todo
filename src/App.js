import React, { Component } from 'react';
import './components/TodoComponents/Todo.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';




class App extends Component {
  // you will need a place to store your state in this component.
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todo: []
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // this function creates a new todo item
  addTodo = item => {
    const newTodo = {
      name: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
    // this.saveTodos();
  };

  // will cross out completed item
  toggleCompleted = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
    // this.saveTodos();
  };

  // this will delete the completed item clearing it from the list
  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => item.completed !== true)
    })
    // this.saveTodos();
  }

 // this will save data to local storage
//  saveTodos = () => {
//    var str = JSON.stringify(newTodo);
//    localStorage.setItem("newTodo", str);
//  }

//  // get data from local storage
//  getTodos = () => {
//    var str = localStorage.getItem("todos");
//    todos = JSON.parse(str);
//    if (!todos) {
//      todos = [];
//    }
//  }

  render() {
    console.log('App is rendering...')
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          </div>
          <div className="main-content">
            <TodoForm addTodo={this.addTodo}
            />
            <TodoList
              clearCompleted={this.clearCompleted}
              toggleCompleted={this.toggleCompleted}
              todo={this.state.todo}
            />
          </div>
      </div>
    );
  }
}

export default App;

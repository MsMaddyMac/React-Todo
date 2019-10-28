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
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => item.completed !== true)
    })
  }

  render() {
    console.log('App is rendering...')
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addTodo={this.addTodo}
          />
        </div>
          <TodoList
            clearCompleted={this.clearCompleted}
            toggleCompleted={this.toggleCompleted}
            todo={this.state.todo}
          />
      </div>
    );
  }
}

export default App;

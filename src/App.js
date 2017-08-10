import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo'
import { addTodo, generateId } from './lib/todoHelpers'

class App extends Component {
  state = {
      todos: [
        { id: 1, name: 'öğren', isComplete: true },
        { id: 2, name: 'geliştir', isComplete: false },
        { id: 3, name: 'paylaş', isComplete: false }
      ],
      currentTodo: ''
    }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  handleSubmit = (evt) =>{
    evt.preventDefault()
    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }
  handleEmptySubmit = (evt) =>{
    evt.preventDefault()
      this.setState({
        errorMessage: 'Lütfen bir todo girin!'
      })
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Yapış listesi !</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            handleSubmit={submitHandler} />

          <TodoList todos={this.state.todos} />

        </div>
      </div>
    );
  }
}

export default App;

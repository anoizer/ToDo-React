import React, { Component } from 'react';
import Form from './components/Form'
import TodosList from './components/TodosList'
// import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            todos: [
                // {id: 1, content: 'understand React'},
                // {id: 2, content: 'write to-do-list'}
            ]
        };
    }


  updateTask = (value) => {
      this.setState({content: value})
  };

  addTodos = () => {
      const index = Math.random().toString(36).substr(2, 16);
      const newTask = {id: index, content: this.state.content};

      this.setState({todos: [...this.state.todos, newTask]});
      this.setState({content: ''});                                                 // <-- why not work?
  };

  deleteTodo = (id) => {
      const filteredTodos = this.state.todos.filter(todo => {
          return todo.id !== id
      });
      this.setState({todos: filteredTodos})
  };

  render () {
      return (
          <div className="App">
            <div>
                <Form content = {this.state.content} updateTask = { this.updateTask } addTodos = { this.addTodos }/>
            </div>
            <div className='list'>
                <TodosList todos = { this.state.todos } deleteTodo = { this.deleteTodo }/>
            </div>
          </div>
      )
  };
}

export default App;

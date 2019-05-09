import React, { Component } from 'react';
import Form from './components/Form'
import TodosList from './components/TodosList'
// import Cookies from 'universal-cookie'


// const cookies = new Cookies();
// const myStorage = window.localStorage;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',

            //state todos with localStorage
            todos: localStorage.getItem('storeObj') ? JSON.parse(localStorage.getItem('storeObj')) : []

            // state todos with cookies
            // todos: cookies.get('myCookies') ? cookies.get('myCookies') : []
            //     // {id: 1, content: 'understand React'},
            //     // {id: 2, content: 'write to-do-list'}
        };
    }

  updateInputField = (content) => {
      this.setState({ content })
  };

  addTodoItem = () => {
      const index = Math.random().toString(36).substr(2, 16);
      const newTask = {id: index, content: this.state.content};

      if(this.state.content) {
          this.setState({todos: [...this.state.todos, newTask], content: ''});

          // localStorage
          setTimeout(() => localStorage.setItem('storeObj', JSON.stringify(this.state.todos)), 1000);

          //cookie
          // setTimeout(() => cookies.set('myCookies', this.state.todos, {path: '/'}), 1000);
      }
  };

  deleteTodoItem = (currentId) => {
      // const { todos } = this.state;

      const filteredTodos = this.state.todos.filter( ({ id }) => id !== currentId );
      this.setState({todos: filteredTodos});

      // localStorage
      setTimeout(() => localStorage.setItem('storeObj', JSON.stringify(this.state.todos)), 1000);

      //cookie
      // setTimeout(() => cookies.set('myCookies', this.state.todos, {path: '/'}), 1000);
  };

  render () {
      const { content, todos } = this.state;

      return (
          <div className="App">
            <div>
                <Form content = { content } updateInputField = { this.updateInputField } addTodoItem = { this.addTodoItem }/>
            </div>
            <div className='list'>
                <TodosList todos = { todos } deleteTodoItem = { this.deleteTodoItem }/>
            </div>
          </div>
      )
  };
}

export default App;

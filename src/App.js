import React, { Component } from 'react';
import Form from './components/Form'
import TodosList from './components/TodosList'
import Cookies from 'universal-cookie'


const cookies = new Cookies();

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',

            todos: cookies.get('myCookies') ? cookies.get('myCookies') : [
                // {id: 1, content: 'understand React'},
                // {id: 2, content: 'write to-do-list'}
            ]
        };
    }

    cookiesSet = () => {
        // console.log('cookies: ',cookies.get('myCookies'));
        // console.log('state: ', this.state.todos);
        // console.log(cookies.get('myCookies').length);

        cookies.set('myCookies', this.state.todos, {path: '/'});

        // this.setState({todos: cookies.get('myCookies')});
    };

  updateTask = (value) => {
      this.setState({content: value})
  };

  addTodos = () => {
      const index = Math.random().toString(36).substr(2, 16);
      const newTask = {id: index, content: this.state.content};

      if(this.state.content) {
          this.setState({todos: [...this.state.todos, newTask], content: ''});


          // this.setState({content: ''});

          // console.log('addedstate: ', this.state.todos);

          //cookie set
          this.cookiesSet()
      }
  };

  deleteTodo = (id) => {
      const filteredTodos = this.state.todos.filter(todo => { return todo.id !== id });
      this.setState({todos: filteredTodos});

      //cookie set
      // this.cookiesSet();
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

import React, { Component } from 'react'

class TodosList extends Component {

    showTasks = () => {
        return this.props.todos.map(todo => {
            return (
                <div key = { todo.id.toString() }>
                    <span onClick={ () => { this.props.deleteTodo(todo.id) }}>
                        { todo.content }
                    </span>
                </div>
            )
        })
    };

    showEmpty = () => {
        return (
            <p>There are nothing to do...</p>
        )
    };

    todoList = () => {
        return this.props.todos.length ?
            this.showTasks() :
            this.showEmpty()
    };

    render () {
        return (
            <div className='list-wrapper'>
                { this.todoList() }
            </div>
        )
    }
}

export default TodosList;
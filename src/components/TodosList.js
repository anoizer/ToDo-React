import React, { Component } from 'react'


class TodosList extends Component {

    showTasks = () => {
        const { todos, deleteTodoItem } = this.props;

        return todos.map( ({ id, content}) =>
                <div key = { id.toString() }>
                    <span onClick={ () => deleteTodoItem(id) }>
                        { content }
                    </span>
                </div>
        )
    };

    showEmpty = () => {
        return (
            <p>There are nothing to do...</p>
        )
    };

    // todoList = () => {
    //     return this.props.todos.length ?
    //         this.showTasks() :
    //         this.showEmpty()
    // };

    render () {
        return (
            <div className='list-wrapper'>
                { this.props.todos.length ? this.showTasks() : this.showEmpty() }
            </div>
        )
    }
}

export default TodosList;
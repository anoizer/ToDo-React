import React, { Component } from 'react'

class Form extends Component {


    onInputChange = ({ target: { value } }) => {
        this.props.updateTask(value);
    };

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){

            this.props.addTodos();
        }
    };

    render () {

        return (
            <>
                <input type="text" onChange={ this.onInputChange } onKeyPress={ this.handleKeyPress }
                       value={ this.props.content } placeholder='type mew task' autoFocus
                />
                <button onClick={ this.props.addTodos }>Add Task</button>
            </>
        )
    }
}

export default Form;
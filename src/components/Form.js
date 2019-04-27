import React, { Component } from 'react'

class Form extends Component {


    onInputChange = ({ target: { value } }) => {
        this.props.updateTask(value);
    };

    render () {

        return (
            <>
                <input type="text" onChange={ this.onInputChange } value={ this.props.content } placeholder='type mew task'/>
                <button onClick={ this.props.addTodos }>Add Task</button>
            </>
        )
    }
}

export default Form;
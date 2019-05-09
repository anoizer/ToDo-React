import React, { Component } from 'react'

class Form extends Component {


    onInputChange = ({ target: { value: content } }) => {
        this.props.updateInputField(content);
    };

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){

            this.props.addTodoItem();
        }
    };

    render () {
        const { content, addTodoItem } =  this.props;

        return (
            <>
                <input type="text" onChange={ this.onInputChange } onKeyPress={ this.handleKeyPress }
                       value={ content } placeholder='type mew task' autoFocus
                />
                <button onClick={ addTodoItem }>Add Task</button>
            </>
        )
    }
}

export default Form;
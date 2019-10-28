import React, { Component } from 'react';


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
        };
    }
    
    handleChanges = e => {
        // updates state with each keystroke by targeting the value during the change event(e)
        this.setState({
            newTodo: e.target.value
        });
    };

    // class method to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    };

    render() {
        console.log('TodoForm is rendering...');
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="item">New Todo</label>
                <input
                type="text"
                name="item"
                id="item"
                value={this.state.newTodo}
                onChange={this.handleChanges}
             />
             <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;
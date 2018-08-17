import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  addTask: PropTypes.func.isRequired,
};

class TodoForm extends Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    const input = document.getElementById('todoInput');
    const { addTask } = this.props;
    addTask(input.value);
    input.value = '';
  }

  render() {
    return (
      <div>
        <div className="todo type1">
          <form className="input-wrapper" onSubmit={this.addTask}>
            <input
              type="text"
              id="todoInput"
              className="add-todo"
              placeholder="What needs to be done"
            />
          </form>
        </div>
        <button type="button" className="add-btn" onClick={this.addTask} />
      </div>
    );
  }
}

TodoForm.propTypes = propTypes;

export default TodoForm;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  myTasks: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string.isRequired, status: PropTypes.string.isRequired }),
  ).isRequired,
  changeStatusTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

class TodoList extends Component {
  constructor() {
    super();
    this.changeStatusTask = this.changeStatusTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.changeList = this.changeList.bind(this);
    this.filterList = this.filterList.bind(this);

    this.state = {
      currentList: 'All',
    };
  }

  changeStatusTask(e) {
    const { changeStatusTask } = this.props;
    changeStatusTask(e.target.parentElement.id);
  }

  removeTask(e) {
    const { removeTask } = this.props;
    removeTask(e.target.parentElement.id);
  }

  changeList(e) {
    const filterBtnContainer = document.querySelector('#filterBtnContainer');
    Array.from(filterBtnContainer.children).forEach(element => element.children[0].classList.remove('active'));

    e.target.classList.add('active');
    this.setState({ currentList: e.target.innerText });
  }

  filterList() {
    const { myTasks } = this.props;
    const { currentList } = this.state;
    return myTasks.filter(
      task => currentList === 'All'
        || (currentList === 'Active' && task.status === 'passive')
        || (currentList === 'Completed' && task.status === 'active'),
    );
  }

  render() {
    let itemLeft = 0;

    const items = this.filterList().map((task, index) => {
      if (task.status === 'passive') itemLeft += 1;

      return (
        <li key={index} id={index} className={task.status}>
          <span className="id">{index + 1}</span>
          <span className="title">{task.text}</span>
          <span className="type" role="presentation" onClick={this.changeStatusTask} />
          <span className="delete" role="presentation" onClick={this.removeTask} />
        </li>
      );
    });

    return (
      <div>
        <div className="todo-list type1">
          <ul>{items}</ul>
        </div>
        <div className="todo-filter">
          <div className="left">
            <span>
              {itemLeft}
              {' items left'}
            </span>
          </div>
          <div className="right" id="listChanger">
            <ul id="filterBtnContainer">
              <li>
                <span
                  className="active"
                  id="filterBtnAll"
                  role="presentation"
                  onClick={this.changeList}
                >
                  All
                </span>
              </li>
              <li>
                <span id="filterBtnActive" role="presentation" onClick={this.changeList}>
                  Active
                </span>
              </li>
              <li>
                <span id="filterBtnCompleted" role="presentation" onClick={this.changeList}>
                  Completed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;

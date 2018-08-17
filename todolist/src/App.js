import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from './inc/Header';
import Footer from './inc/Footer';

class App extends Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.changeStatusTask = this.changeStatusTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

    this.state = {
      myTasks: JSON.parse(localStorage.getItem('tasks')) || [],
    };
  }

  addTask(value) {
    const { myTasks } = this.state;
    myTasks.push({ text: value, status: 'passive' });
    localStorage.setItem('tasks', JSON.stringify(myTasks));
    this.setState({ myTasks });
  }

  changeStatusTask(taskId) {
    const { myTasks } = this.state;
    const myTask = myTasks[taskId];

    if (myTask.status === 'passive') {
      myTask.status = 'active';
    } else {
      myTask.status = 'passive';
    }
    localStorage.setItem('tasks', JSON.stringify(myTasks));
    this.setState({ myTasks });
  }

  removeTask(taskId) {
    const { myTasks } = this.state;
    myTasks.splice(taskId, 1);
    localStorage.setItem('tasks', JSON.stringify(myTasks));
    this.setState({ myTasks });
  }

  render() {
    const { myTasks } = this.state;

    return (
      <div className="content">
        <Header />
        <TodoForm addTask={this.addTask} />
        <TodoList
          myTasks={myTasks}
          changeStatusTask={this.changeStatusTask}
          removeTask={this.removeTask}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

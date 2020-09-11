import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    tasks: [],
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTickedTasks = () => {
    this.setState({
      persons: [],
    });
  };

  handleCheck = () => {
    this.setState({
      isChecked: true,
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1>To Do List</h1>
        <Form handleSubmit={this.handleSubmit} />
        <Table
          taskData={tasks}
          deleteTickedTasks={this.deleteTickedTasks}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default App;

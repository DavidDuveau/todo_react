import React, { Component } from "react";

const TBody = (props) => {
  const tableRow = props.taskData.map((task, index) => {
    return (
      <tr key={index}>
        <td>{task.aFaire}</td>
        <td>
          <input type="checkbox" checked={task.isChecked} />
        </td>
      </tr>
    );
  });
  return <tbody>{tableRow}</tbody>;
};

class Table extends Component {
  render() {
    const { taskData, deleteTickedTasks, handleCheck } = this.props; //<=> const personData = this.props.personData

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Tache</th>
              <th>Fait</th>
            </tr>
          </thead>
          <TBody taskData={taskData} handleCheck={handleCheck} />
        </table>
        <button onClick={() => deleteTickedTasks()}>Taches terminées</button>
      </div>
    );
  }
}

export default Table;

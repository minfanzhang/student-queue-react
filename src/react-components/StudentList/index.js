import React from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import Student from "./../Student";

import "./styles.css";

import Checkbox from "@material-ui/core/Checkbox";


/* Component for the List of Students */
class StudentList extends React.Component {
  
  state = {
    showWaitTimes: true // a flag to toggle whether wait times are shown.
  }

  // a function to toggle the wait times.
  toggleWaitTimes = () => {
    this.setState({
      showWaitTimes: !this.state.showWaitTimes
    })
  }

  render() {
    const { students, queueComponent } = this.props;

    /* Our student list.  We use the state to iterate through the 
       student list and make an <li> for each one. */
    return (
      <div>
        <Checkbox
           checked={this.state.showWaitTimes}
           onChange={this.toggleWaitTimes}
        /> <span>Show wait times</span>

        <Table className="student-list">
          <TableBody>
            {students.map(student => (
              <Student
                key={uid(
                  student
                )} /* unique id required to help React render more efficiently when we modify the students list. */
                student={student}
                queueComponent={queueComponent}
                showWaitTimes={this.state.showWaitTimes}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default StudentList;

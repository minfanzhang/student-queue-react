import React from "react";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { removeStudent } from "../../actions/queue";

import "./styles.css";

const log = console.log;

class Student extends React.Component {
  /*  Common 'Lifecycle' methods 
      - constructor
      - componentDidMount
      - componentWillUnmount
  */

  constructor(props) {
    // When the componenet is created
    super(props);
    this.state = {
      seconds: 0
    };
  }

  componentDidMount() {
    // When the component enters the DOM
    this.studentTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // When the component leaves the DOM
    log("clearing");
    clearInterval(this.studentTimer);
  }

  // To tick off the seconds
  tick() {
    console.log("tick");
    this.setState({
      seconds: this.state.seconds + 1
    });
    log(this.state.seconds);
  }

  render() {
    const { student, queueComponent, showWaitTimes } = this.props;

    return (
      <TableRow className="student" key={student.name}>
        <TableCell component="th" scope="row">
          {student.name}
        </TableCell>

        <TableCell component="th" scope="row">
          {student.course}
        </TableCell>

        {/* Show how long the student has been waiting for */}
        { showWaitTimes ? // if the check box is checked, showWaitTimes is true, so render the <TableCell>
            <TableCell component="th" scope="row">
              Waiting for: {Math.floor(this.state.seconds / 60)} minutes{" "}
              {this.state.seconds % 60} seconds.
            </TableCell>
            : null
        }

        <TableCell component="th" scope="row">
          <Button
            variant="contained"
            color="secondary"
            onClick={
              /* Remove button onClick binds the student as the parameter to the remove function. 
                (the value of `this`` doesn't matter because we don't use it in removeStudent, and
                it's an arrow function which doesn't allow us to bind `this` explicitly anyway. 
                However, you may see this with non-arrow functions from time to time, so
                we are leaving it here as a reference)
                */
              // removeStudent.bind(this, queueComponent, student)
              () => removeStudent(queueComponent, student) // an arrow function expression like this one is commonly used
            }
          >
            remove
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default Student;

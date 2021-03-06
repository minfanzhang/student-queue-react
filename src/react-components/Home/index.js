import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "./styles.css";

/* Component for the Home page */
class Home extends React.Component {
  render() {
    return (
      <div className="home__bg-image center">
        <Link className="home__button-link center" to={"./../Queue"}>
               { /* Using the global state variable from App.js */}
          <Button className="home__button">Go to the {this.props.appState.term} Queue </Button>
        </Link> 
      </div>
    );
  }
}

export default Home;

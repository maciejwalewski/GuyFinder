import React, { Component } from "react";

class Circles extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="circlesContainer">
        <div className="circles">
          <div className="circle circle--firstRow circle--move1 " />
          <div className="circle circle--firstRow circle--move2 circle--medium circle--col1" />
          <div className="circle circle--firstRow circle--move4 circle--small circle--col3" />
          <div className="circle circle--secondRow circle--move3 circle--small circle--col2" />
          <div className="circle circle--secondRow circle--move7 circle--medium circle--col1" />
          <div className="circle circle--secondRow circle--move5 circle--col2" />
          <div className="circle circle--thirdRow circle--move4 circle--small circle--col4" />
          <div className="circle circle--thirdRow circle--move10 circle--col2" />
          <div className="circle circle--fourthRow circle--move5 circle--medium circle--col3" />
          <div className="circle circle--fourthRow circle--move6 circle--col1" />
          <div className="circle circle--fifthRow circle--move3 circle--medium circle--col4" />
          <div className="circle circle--fifthRow circle--move9 circle--col2" />
          <div className="circle circle--sixthRow circle--move8 circle--small circle--col3" />
          <div className="circle circle--sixthRow circle--move7 circle--medium circle--col4" />
        </div>
      </div>
    );
  }
}

export default Circles;

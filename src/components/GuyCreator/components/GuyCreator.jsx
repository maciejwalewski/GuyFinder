import React, { Component } from "react";
import DelayLink from "@/components/utilities/DelayLink";

import { CreatorPopup } from "../";
import { GuyCreatorList } from "../";

class GuyCreator extends Component {
  constructor() {
    super();

    this.state = {
      mounted: false
    };

    this.dismounting = this.dismounting.bind(this);
  }

  componentDidMount() {
    this.props.measureWindow();

    setTimeout(() => {
      this.setState({
        mounted: true
      });
    }, 100);

    window.addEventListener("resize", this.props.measureWindow.bind(this));
  }

  dismounting() {
    this.setState({
      mounted: false
    });
  }

  render() {
    const { mounted } = this.state;

    return (
      <div
        className={
          mounted ? "guyCreatorPage guyCreatorPage--visible" : "guyCreatorPage"
        }
      >
        <div className="row">
          <div className="col-xs-12 mainPageButtonCol">
            <DelayLink to="/" delay={350} onDelayStart={this.dismounting}>
              <button className="mainPageBtn hvr-bounce-in">Main Page</button>
            </DelayLink>
          </div>
        </div>
        <CreatorPopup />
        <GuyCreatorList />
      </div>
    );
  }
}

export default GuyCreator;

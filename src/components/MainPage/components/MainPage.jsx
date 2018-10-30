import React, { Component } from "react";
import DelayLink from "@/components/utilities/DelayLink";

import { Results } from "../";
import Circles from "@/components/shared/Circles";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      searchPersonShown: false,
      searchTechShown: false,
      mounted: false
    };

    this.togglePersonSearch = this.togglePersonSearch.bind(this);
    this.toggleTechSearch = this.toggleTechSearch.bind(this);
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

  togglePersonSearch() {
    this.setState(prevState => ({
      searchPersonShown: !prevState.searchPersonShown
    }));
  }

  toggleTechSearch() {
    this.setState(prevState => ({
      searchTechShown: !prevState.searchTechShown
    }));
  }

  render() {
    const { mounted } = this.state;

    const { windowWidth } = this.props;

    return (
      <div className={mounted ? "mainPage mainPage--visible" : "mainPage"}>
        {windowWidth > 767 && <Circles />}
        <div className="row">
          <div className="col-xs-12 creatorButtonCol">
            <DelayLink
              to="/creator/"
              delay={350}
              onDelayStart={this.dismounting}
            >
              <button className="creatorBtn hvr-bounce-in">Creator</button>
            </DelayLink>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 titleRow">
            <h1>GuyFinder</h1>
            <h2>Perfect tool to find right guy!</h2>
          </div>
        </div>
        <Results />
        <a
          className="sourceCode"
          target="blank"
          href="https://github.com/maciejwalewski/GuyFinder/tree/master/src"
        >
          Check out my source code!
        </a>
      </div>
    );
  }
}

export default MainPage;

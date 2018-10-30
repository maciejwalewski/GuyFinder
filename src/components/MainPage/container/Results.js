import { connect } from 'react-redux';

import Results from '../components/Results';

const mapStateToProps = state => {
  return {
    peopleList: state.guyReducer.list,
    windowWidth: state.windowReducer.windowWidth,
  };
}

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
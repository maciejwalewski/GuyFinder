import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Results from '../components/Results';

const mapStateToProps = state => {
  return {
    peopleList: state.list,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Results);
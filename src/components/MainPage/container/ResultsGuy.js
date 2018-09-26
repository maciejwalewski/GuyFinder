import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ResultsGuy from '../components/ResultsGuy';

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsGuy);
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Guy from '../components/Guy';

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    removeGuy: (guy) =>
      dispatch({
        type: 'REMOVE_GUY',
        payload: guy
      })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Guy);
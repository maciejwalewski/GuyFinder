import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Editor from '../components/Editor';

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    removeGuy: (editedGuy) =>
      dispatch({
        type: 'EDIT_GUY',
        payload: editedGuy,
      })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GuyCreator from '../components/GuyCreator';

const mapStateToProps = state => {
	return {
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		measureWindow: () =>
			dispatch({
				type: 'WINDOW_MEASUREMENT',
			})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GuyCreator);
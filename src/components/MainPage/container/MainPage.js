import { connect } from 'react-redux';

import MainPage from '../components/MainPage';

const mapStateToProps = state => {
	const {
	} = state;

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
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
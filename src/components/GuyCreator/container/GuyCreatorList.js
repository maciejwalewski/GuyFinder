import { connect } from 'react-redux';

import GuyCreatorList from '../components/GuyCreatorList';

const mapStateToProps = (state) => {
	return {
		peopleList: state.guyReducer.list,
		windowWidth: state.windowReducer.windowWidth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(GuyCreatorList);
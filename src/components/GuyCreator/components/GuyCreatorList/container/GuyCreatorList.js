import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GuyCreatorList from '../components/GuyCreatorList';

const mapStateToProps = (state) => {
	return {
		peopleList: state.list,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(GuyCreatorList);
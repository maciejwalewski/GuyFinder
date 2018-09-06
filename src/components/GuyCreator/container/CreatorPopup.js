import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreatorPopup from '../components/CreatorPopup';

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setData: (person) =>
			dispatch({
				type: 'SET_PERSON',
				payload: person
			})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatorPopup);
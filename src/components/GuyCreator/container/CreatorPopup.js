import { connect } from 'react-redux';

import CreatorPopup from '../components/CreatorPopup';

const mapStateToProps = (state) => {
	return {
		nextId: state.guyReducer.nextId,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setData: (person) =>
			dispatch({
				type: 'ADD_PERSON',
				payload: person
			})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatorPopup);
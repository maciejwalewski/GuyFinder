import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainPage from '../components/MainPage'

const mapStateToProps = state => {
    const {
    } = state;

    return {
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
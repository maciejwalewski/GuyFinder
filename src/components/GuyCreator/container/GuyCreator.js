import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GuyCreator from '../components/GuyCreator';

const mapStateToProps = state => {
    const {
    } = state;

    return {
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GuyCreator);
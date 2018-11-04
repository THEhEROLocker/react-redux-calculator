import { connect } from 'react-redux';
import Button from '../components/Button';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
    handleButtonClick: (actionCreator, value) => dispatch(actionCreator(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);


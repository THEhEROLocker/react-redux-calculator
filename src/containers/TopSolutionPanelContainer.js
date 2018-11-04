import { connect } from 'react-redux';
import TopSolutionPanel from '../components/TopSolutionPanel'

const mapStateToProps = ({ SolutionReducer }) => ({ value: SolutionReducer.solutionDisplayValue });

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSolutionPanel);
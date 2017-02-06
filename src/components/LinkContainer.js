import { connect } from 'react-redux';
import Link from './Link';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    isActive: state.filter === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))

    }
  }
}

const LinkContainer = connect(mapStateToProps, mapDispatchToProps)(Link);

export default LinkContainer

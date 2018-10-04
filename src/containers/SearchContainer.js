import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

const mapStatetoProps = (state) => {
  return { //map relevant components from state to container
    handleSearchInputChange: state.handleSearchInputChange
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (video) => {
      dispatch (handleSearchChange(video));
    }
  };
};

const SearchContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(Search);
    //merges obj from each to its own props

// function mapStateToProps(state) {
//   return { todos: state.todos }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     todoActions: bindActionCreators(todoActionCreators, dispatch),
//     counterActions: bindActionCreators(counterActionCreators, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;

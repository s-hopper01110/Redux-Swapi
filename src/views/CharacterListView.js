import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChars } from '../actions';
import { FETCH_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAILURE } from '../actions';


class CharacterListView extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   char: ''
    // }
  }

  componentDidMount() {
    // call our action
    this.props.fetchChars();
  
  }


  

  

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>I'm Loading please hold ...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps (state) {

  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
}



// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
 mapStateToProps,
  { fetchChars, FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE }
    /* action creators go here */
  
)(CharacterListView);

import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Inputer from './components/Inputer';
import { addNote, getNotes, markNote } from './actions';
import NoteList from './components/NoteList';

class App extends React.Component {
  componentWillMount = () => this.props.dispatch(getNotes());

  handleAddNote = (content) => this.props.dispatch(addNote({ content }))
  handleMarkNote = (id, marked) => this.props.dispatch(markNote(id, marked))

  render () {
    const { notes } = this.props;
    console.log(notes);
    const unmarkedCount = notes.filter(note => !note.marked).length;

    return (
      <div className="App">
        <Header unmarkedCount={unmarkedCount} />
        <Inputer handleOk={this.handleAddNote} />
        <NoteList notes={notes} handleMarkNote={this.handleMarkNote} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
});

const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;

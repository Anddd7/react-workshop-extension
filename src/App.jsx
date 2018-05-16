import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Inputer from './components/Inputer';
import { addNote, getNotes, markNote, addNoteSuccess, getNotesSuccess, markNoteSuccess } from './actions';
import NoteList from './components/NoteList';
import API from './api';


class App extends React.Component {
  componentWillMount = () =>
    API.get('/note')
      .then(res => this.props.dispatch(getNotesSuccess(res.data.obj)))

  handleAddNote = (content) =>
    API.post('/note', { content })
      .then(res => this.props.dispatch(addNoteSuccess(res.data.obj)))

  handleMarkNote = (id, marked) =>
    API.get(`/note/${id}/mark?marked=${marked}`)
      .then(res => this.props.dispatch(markNoteSuccess(res.data.obj)))

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

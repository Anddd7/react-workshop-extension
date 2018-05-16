import { combineReducers } from 'redux';
import { GET_NOTES, ADD_NOTE, MARK_NOTE } from '../actions';

const staticNotes = [{
  id: 10000010,
  content: '默认内容......',
  marked: false,
},
{
  id: 10000011,
  content: '默认内容1......',
  marked: true,
}];


const notes = (oldState = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return staticNotes;
    case ADD_NOTE:
      return [action.note].concat(oldState);
    case MARK_NOTE:
      return oldState.map(note => {
        if (note.id === action.id) {
          note.marked = action.marked
        }
        return note;
      })
    // case GET_NOTES_SUCCESS:
    //   return action.notes;
    // case ADD_NOTE_SUCCESS:
    //   return [action.note].concat(oldState);
    // case MARK_NOTE_SUCCESS:
    //   return oldState.map(note => {
    //     if (note.id === action.id) {
    //       note.marked = action.marked
    //     }
    //     return note;
    //   })
    default:
      return oldState;
  }
};
const rootReducer = combineReducers({
  notes,
});

export default rootReducer;

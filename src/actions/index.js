export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const MARK_NOTE = 'MARK_NOTE';

export function getNotes () {
  return { type: GET_NOTES };
}

export function addNote (note) {
  console.log(note);
  const newNote = Object.assign({}, note, { id: new Date().getTime(), marked: false });
  return { type: ADD_NOTE, note: newNote };
}

export function markNote (id, marked) {
  console.log(id, marked);
  return { type: MARK_NOTE, id, marked };
}

/*
 * callback actions
 */
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const MARK_NOTE_SUCCESS = 'MARK_NOTE_SUCCESS';

export function getNotesSuccess (notes) {
  console.log(notes);
  return {
    type: GET_NOTES_SUCCESS,
    notes,
  };
}

export function addNoteSuccess (note) {
  return { type: ADD_NOTE_SUCCESS, note };
}

export function markNoteSuccess (note) {
  return { type: MARK_NOTE_SUCCESS, id: note.id, marked: note.marked };
}


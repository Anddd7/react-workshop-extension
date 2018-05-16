import React from 'react';



const NoteList = ({ notes, handleMarkNote }) => (
  <div className='note-list'>
    <ul>
      {
        notes.map(note => (
          <li className={note.marked ? 'marked' : 'unmarked'} key={note.id}>
            <button
              onClick={() => handleMarkNote(note.id, !note.marked)}>
              {note.content}
            </button>
          </li>)
        )
      }
    </ul>
  </div>
);

export default NoteList;
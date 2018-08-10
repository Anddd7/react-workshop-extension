import { combineReducers } from 'redux';
import { GET_TOP10_PUBLISHED_RECORD, GET_START, GET_END } from '../actions';

const top10PublishedRecord = (oldState = {}, action) => {
  switch (action.type) {
    case GET_TOP10_PUBLISHED_RECORD:
      return action.top10PublishedRecord;
    default:
      return oldState;
  }
};
const rootReducer = combineReducers({
  top10PublishedRecord,
});

const loading = (oldState = false, action) => {
  switch (action.type) {
    case GET_START:
      return true;
    case GET_END:
      return false;
    default:
      return oldState;
  }
}

export default rootReducer;

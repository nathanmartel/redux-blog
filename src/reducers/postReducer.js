import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
}

import { CONTEST_SUBMIT } from '../actions/types';

const DEFAULT_STATE = {};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CONTEST_SUBMIT:
      return {...state, submit: action.payload};
    default:
      return state;
  }
}

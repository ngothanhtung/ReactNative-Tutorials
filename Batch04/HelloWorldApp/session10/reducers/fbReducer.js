import * as ActionTypes from '../actions/types';
const defaulState = {
  comments: [
    { username: 'tungnt', commentText: 'Hello Redux' },
    { username: 'admin', commentText: 'Hello 1' }
  ]
};
//  Object.assign: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const fbReducer = (state = defaulState, action) => {
  switch (action.type) {
    case ActionTypes.FB_ADD_COMMENT:
      var comments = [...state.comments, { username: action.username, commentText: action.commentText }];

      return { ...state, comments: comments };

    default:
      return state;
  }
}

export default fbReducer;
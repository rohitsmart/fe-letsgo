import { combineReducers } from 'redux';

const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.payload;
    default:
      return state;
  }
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
});

export default rootReducer;

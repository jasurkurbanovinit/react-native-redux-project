import {ADD_ARTICLE, CHANGE_TITLE} from './../constants';

const initialState = {
  articles: [],
  title: '',
};

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles, action.payload]};
    case CHANGE_TITLE:
      return {...state, title: action.payload};
    default:
      return state;
  }
};

export default rootReducers;

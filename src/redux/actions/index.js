import {ADD_ARTICLE, CHANGE_TITLE} from './../constants';

export function addArticle(payload) {
  return {type: ADD_ARTICLE, payload};
}
export function setTitle(payload) {
  return {type: CHANGE_TITLE, payload};
}

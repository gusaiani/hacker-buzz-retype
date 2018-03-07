import {
  FETCH_STORIES
} from './types';

export function fetchStoriesRequest() {
  return {
    type: FETCH_STORIES
  }
}
export function fetchStories(category) {
  return dispatch => {
    dispatch(fetchStoriesRequest());
  }
}

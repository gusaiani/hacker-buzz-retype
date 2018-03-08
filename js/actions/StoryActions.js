import {
  FETCH_STORIES,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_FAILURE,
} from './types';

import { getStories } from '../network/api';

export function fetchStoriesSuccess(category, stories) {
  return {
    type: FETCH_STORIES_SUCCESS,
    category,
    payload: stories
  };
}

export function fetchStoriesRequest() {
  return {
    type: FETCH_STORIES
  }
}

export function fetchStoriesFailure() {
  return {
    type: FETCH_STORIES_FAILURE
  };
}

export function fetchStories(category) {
  return dispatch => {
    dispatch(fetchStoriesRequest());
    return getStories(category)
      .then(stories => dispatch(fetchStoriesSuccess(category, stories)))
      .catch(() => dispatch(fetchStoriesFailure()));
  }
}

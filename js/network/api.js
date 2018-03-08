import { categoryEndPoint } from './config';
import fetch from 'isomorphic-fetch';

export function getStories(category) {
  return fetch(categoryEndPoint(category))
    .then(response => response.json())
    .then(stories => {
      return stories;
    });
}

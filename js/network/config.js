export const API_ENDOINT = 'https://hacker-news.firebaseio.com/v0/';

export const categoryEndPoint = category => {
  return API_ENDOINT + category + '.json';
};

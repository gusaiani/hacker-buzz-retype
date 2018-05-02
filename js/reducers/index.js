import { combineReducers } from 'redux';

import { NavigatorTabMain } from '../containers/main/navigationConfiguration';
import { NavigatorTabAsk } from '../containers/ask/navigationConfiguration';
import { NavigatorTabShow } from '../containers/show/navigationConfiguration';
import { NavigatorTabJobs } from '../containers/jobs/navigationConfiguration';

import { tabBarReducer } from '../containers/navigationConfiguration';

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  tabMain: (state, action) =>
    NavigatorTabMain.router.getStateForAction(action, state),
  tabAsk: (state, action) =>
    NavigatorTabAsk.router.getStateForAction(action, state),
  tabShow: (state, action) =>
    NavigatorTabShow.router.getStateForAction(action, state),
  tabJobs: (state, action) =>
    NavigatorTabJobs.router.getStateForAction(action, state),
})

export default rootReducer;

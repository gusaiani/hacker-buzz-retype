import { combineReducers } from 'redux';

import { NavigatorTabMain } from '../containers/main/navigationConfiguration';
import { NavigatorTabAsk } from '../containers/ask/navigationConfiguration';

import { tabBarReducer } from '../containers/navigationConfiguration';

const rootReducer = combineReducers({
  tabBar: tabBarReducer,
  tabMain: (state, action) =>
    NavigatorTabMain.router.getStateForAction(action, state),
  tabAsk: (state, action) =>
    NavigatorTabAsk.router.getStateForAction(action, state),
})

export default rootReducer;

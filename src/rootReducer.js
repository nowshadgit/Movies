import { combineReducers } from 'redux';
import { ListReducerStore } from './containers/List/List.reducer'
import { DetailsReducerStore } from './containers/Details/Details.reducer'
/* Import all the reducers and combine them here */
const rootReducer = combineReducers({
  ListReducerStore,
  DetailsReducerStore
});

export default rootReducer;

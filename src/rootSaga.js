import { all, takeEvery} from 'redux-saga/effects';

import ACTIONS from './apiConfig/actions.constants';
import { getMovieDetails } from './containers/Details/Details.saga';
import { getMovies, getMoviesWithId } from './containers/List/List.saga';

export default () =>
  all([
    takeEvery(ACTIONS.MOVIES.GET_MOVIES, getMovies),
    takeEvery(ACTIONS.MOVIES.GET_MOVIE_WITH_ID, getMoviesWithId),
    takeEvery(ACTIONS.MOVIES.GET_MOVIE_DETAILS, getMovieDetails)
  ]);

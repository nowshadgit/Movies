import { call, put } from 'redux-saga/effects';
import ACTIONS from '../../apiConfig/actions.constants';
import { getData } from '../../utils/common';

function* getMovieDetails(action) {
  let response;
  try {
    const { movieId } = action.data;
    const url = `http://www.omdbapi.com/?i=${movieId}&apikey=a07e499a`
    response = yield call(getData, url);
    if (response.data && response.data.Response) {
      yield put({
        type: ACTIONS.MOVIES.GET_MOVIE_DETAILS_SUCCESS,
        payload: response.data
      });
    } else {
      yield put({
        type: ACTIONS.MOVIES.GET_MOVIE_DETAILS_FAIL,
        payload: response.data
      });
    }
  } catch (e) {
    yield put({ type: ACTIONS.MOVIES.GET_MOVIE_DETAILS_FAIL, payload: e });
  }
}

const dummy = {};

export {dummy, getMovieDetails };

import { call, put, all } from 'redux-saga/effects';
import ACTIONS from '../../apiConfig/actions.constants';
import { ALL } from '../../utils/constants';
import { getData } from '../../utils/common';


function* getMovies(action) {
  let response;
  try {
    const { searchType,searchStr } = action.payload;
    let seType = searchType === ALL.toLowerCase() ? '' : `&type=${searchType}`
    const url = `http://www.omdbapi.com/?s=${searchStr}${seType}&apikey=a07e499a`
    response = yield call(getData, url);
    const data = response.data
    if (data.Response !== "False") {
      yield put({
        type: ACTIONS.MOVIES.GET_MOVIES_SUCCESS,
        payload: data.Search
      });
    } else {
      yield put({
        type: ACTIONS.MOVIES.GET_MOVIES_FAIL,
        payload: data.Error
      });
    }
  } catch (e) {
    yield put({ type: ACTIONS.MOVIES.GET_MOVIES_FAIL, payload: e });
    
  }
}


function* getMoviesWithId(action) {
  let response;
  try {
    const { payload } = action;
    
    let allReq = []
    for(let each of payload){
      const url = `http://www.omdbapi.com/?i=${each}&apikey=a07e499a`
      allReq.push(call(getData,url))
    }
    response = yield all(allReq)

    let allRes = []
    for(let each of response){
      if(each.data && each.data.Response){

        allRes.push({
          Title:each.data.Title, Poster:each.data.Poster,
          Year:each.data.Year, imdbID: each.data.imdbID
        })
      }else{
        allRes.push({Error:"Some Error"})
      }
    }

    if("Error" in allReq[0]){
      yield put({
        type: ACTIONS.MOVIES.GET_MOVIE_WITH_ID_FAIL,
        payload: allRes
      });
    }else{
      yield put({
        type: ACTIONS.MOVIES.GET_MOVIE_WITH_ID_SUCCESS,
        payload: allRes
      });
    }

  } catch (e) {
    yield put({ type: ACTIONS.MOVIES.GET_MOVIE_WITH_ID_FAIL, payload: e });
  }
}

const dummy = {};

export {dummy, getMovies, getMoviesWithId };

import ACTIONS from '../../apiConfig/actions.constants';

const initialState = {
  inProgress: false,
  data:[]
};

const ListReducerStore = (stateParam, { type, payload }) => {
  const state = stateParam || initialState;
  switch (type) {
    case ACTIONS.MOVIES.GET_MOVIES:
      return { ...state, errorCode:'', inProgress: true };
    case ACTIONS.MOVIES.GET_MOVIES_SUCCESS:
      return { ...state, data: payload, inProgress: false };
    case ACTIONS.MOVIES.GET_MOVIES_FAIL:
      return { ...state, errorCode: payload, inProgress: false };

    case ACTIONS.MOVIES.GET_MOVIE_WITH_ID:
      return { ...state, errorCode:'',inProgress: true };
    case ACTIONS.MOVIES.GET_MOVIE_WITH_ID_SUCCESS:
      return { ...state, data: payload, inProgress: false };
    case ACTIONS.MOVIES.GET_MOVIE_WITH_ID_FAIL:
      return { ...state, errorCode: payload, inProgress: false };

    default:
      return state;
  }
};

const dummy = () => {};

export { ListReducerStore, dummy };

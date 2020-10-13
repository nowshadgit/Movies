import ACTIONS from '../../apiConfig/actions.constants';

const initialState = {
  errorCode: '',
  inProgress: false,
  data:{}
};

const DetailsReducerStore = (stateParam, { type, payload }) => {
  const state = stateParam || initialState;
  switch (type) {
    case ACTIONS.MOVIES.GET_MOVIE_DETAILS:
      return { ...state, data: {}, inProgress: true };
    case ACTIONS.MOVIES.GET_MOVIE_DETAILS_SUCCESS:
      return { ...state, data: payload, inProgress: false };
    case ACTIONS.MOVIES.GET_MOVIE_DETAILS_FAIL:
      return { ...state, errorCode: payload.error_code, inProgress: false };
    default:
      return state;
  }
};

const dummy = () => {};

export { DetailsReducerStore, dummy };

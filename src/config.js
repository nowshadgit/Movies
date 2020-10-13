import { include } from 'named-urls';
import { PAGE } from './utils/constants';

const MOVIES_ROUTE = {
  [PAGE.MOVIE_LIST]: include('/movies/',{
    [PAGE.MOVIE_DETAILS]:include(':movieId/',{
      SHOW: ''
    })
  })
};

export {
  MOVIES_ROUTE
};

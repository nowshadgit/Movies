import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppliedRoute from './components/AppliedRoute';
import PageLoader from './components/PageLoader/PageLoader';
import { PAGE } from './utils/constants';
import { MOVIES_ROUTE } from './config';


const delayTime = 60;

const AsyncList= Loadable({
  loader: () => import('./containers/List/List'),
  loading: PageLoader,
  delay: delayTime
});

const AsyncDetails= Loadable({
  loader: () => import('./containers/Details/Details'),
  loading: PageLoader,
  delay: delayTime
});

const AsyncNotFound = Loadable({
  loader: () => import('./components/NotFound/NotFound'),
  loading: PageLoader,
});

const Routes = ({ childProps }) => {
  const props = {
    ...childProps
  };

  return (
    <BrowserRouter basename="">
      <>
        <Switch>
          <AppliedRoute
            path={MOVIES_ROUTE[PAGE.MOVIE_LIST][PAGE.MOVIE_DETAILS]['SHOW']}
            exact
            component={AsyncDetails}
            props={{...props, page:PAGE.MOVIE_DETAILS}}
          />
          <AppliedRoute
            path='/'
            exact
            component={AsyncList}
            props={{...props, page:PAGE.MOVIE_LIST, showSearch:true}}
          />
          <Route component={AsyncNotFound} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  childProps: PropTypes.element
};

Routes.defaultProps = {
  childProps: <></>
};

export default Routes;

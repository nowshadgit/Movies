import React, { useState} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { SELECT } from '../utils/constants';


import NavBar from './Navbar/Navbar';
import SearchInput from './SearchInput/SearchInput';
import ACTIONS from '../apiConfig/actions.constants';
import { handleClick } from '../utils/common';


const AppliedRoute = ({
  component: C,
  props: cProps,
  ...rest
}) => {
  const {showSearch } = cProps;
  const {submitSearch} = rest

  let [searchStr, setSearchStr] = useState('')
  let [searchType, setSearchType] = useState(SELECT)
  
  const Component = <>
    <NavBar userName="Nowshad" />
    {showSearch && <div className="row mt-4">
    <div className="col col-3"/>
    <div className="col">
      <SearchInput 
        setSearchStr={setSearchStr} 
        searchStr={searchStr} 
        searchType={searchType}
        setSearchType={setSearchType}
        submitSearch={submitSearch}
      />
    </div>
    <div className="col col-3"/>
    </div>}
    <div className="row mt-5 p-3">
      <div className="col">
        <Route
            {...rest}
            render={props => <C {...props} {...cProps} inProgress searchObj={{searchStr,searchType}} />}
          />
      </div>
    </div>
  </>
  return <>{Component}</>;
};

const mapDispatchToProps = dispatch => {
  return {
    submitSearch: (payload) => {
      dispatch({type:ACTIONS.MOVIES.GET_MOVIES, payload});
    }
  };
};


export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AppliedRoute)
);

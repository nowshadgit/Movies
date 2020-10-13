import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.scss';
import CustomButton from '../CustomButton/CustomButton';
import { handleClick } from '../../utils/common';
import ACTIONS from '../../apiConfig/actions.constants';

const Navbar = props => {
  const userItem = (
    <CustomButton 
      id={"fav"} 
      className={"fav-btn"} 
      text={"favorite"} 
      type={"button"}
      submitFunction={handleClick}
      {...props}
    />      
  );

  return (
    <div className="fp-navbar sticky-top">  
      <nav className={`navbar  navbar-expand-lg navbar-light`}>
        Movies
        {userItem}
      </nav>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    getMoviesWithId: (payload) => {
      dispatch({type:ACTIONS.MOVIES.GET_MOVIE_WITH_ID, payload});
    }
  };
};


export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);

import React from "react";
import PropTypes from "prop-types";

import "./NotFound.scss";
import "../../styles/App.scss";
import ErrorImg from "../../images/error.png";
import {redirect } from "../../utils/common";

const NotFound = props => (
  <div className="error-bg">
    <div className="error-txt">Sorry, we can’t find that page.</div>
    <div className="error-txt1">
      Please try retyping the address or just head back to our home page.
    </div>
    <div className="error-img">
      <img src={ErrorImg} alt="Page Not Found" />
    </div>
    <div className="btn-home">
      <button className="btn btn-light" onClick={()=>redirect(props, '/')}>
        Go home
      </button>
    </div>
  </div>
);

NotFound.propTypes = {
  changeHandler: PropTypes.func
};

NotFound.defaultProps = {
  changeHandler: () => {}
};

export default NotFound;

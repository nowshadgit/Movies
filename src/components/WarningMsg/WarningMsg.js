import React from 'react';
import PropTypes from 'prop-types';

import './WarningMsg.scss';

const WarningMsg = props => (
  <div className="warning-message">{props.message}</div>
);

WarningMsg.propTypes = {
  message: PropTypes.string
};


export default WarningMsg;

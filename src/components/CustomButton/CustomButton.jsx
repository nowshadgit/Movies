import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const CustomButton = props => {
  const {
    submitFunction,
    text,
    id,
    type,
    className
  } = props;
  return (
    <div className="">
      <Button
        id={id}
        type={type}
        className={className}
        onClick={()=>submitFunction(id,props)}
      >
        {text}
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  submitFunction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CustomButton;

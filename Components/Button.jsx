import React from 'react';

const SubmitButton = ({ onClickHandler, buttonText }) => {
  return (
    <button onClick={onClickHandler}>{buttonText}</button>
  );
};

export default SubmitButton;
import React from 'react';
const MyForm = props => {
  let { salutation, salutation2, message } = props;
  return (
    <div className="form--parent">
      <div className="form--firstChild">
        <span
          className="text--large--bold"
          style={{ letterSpacing: 4, marginBottom: 25 }}>
          <div className="underline">{salutation}</div> {salutation2}
        </span>
        <span className="text--reg" style={{ fontSize: 20 }}>
          {message}
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default MyForm;

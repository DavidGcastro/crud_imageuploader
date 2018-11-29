import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Photos extends Component {
  render() {
    return (
      <div className="profile--upload">
        <div className="profile--questions">
          <span className="text--large--light">Photos</span>
        </div>
      </div>
    );
  }
}

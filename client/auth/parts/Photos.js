import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
const imageMaxSize = 10000000000;

export default class Photos extends Component {
  handleOnDrop = (files, rejectedFiles) => {};
  render() {
    return (
      <div className="profile--questions">
        <span className="text--large--light underline">Photos</span>
        <Dropzone
          multiple={false}
          className="profile--dropzone"
          onDrop={this.handleOnDrop}
          maxSize={imageMaxSize}>
          <span className="text--reg">Drag photos here</span>
        </Dropzone>
      </div>
    );
  }
}

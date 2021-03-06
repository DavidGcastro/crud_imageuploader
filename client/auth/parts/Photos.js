import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { addPhotoAsync } from '../../redux/reducers/photos';
const imageMaxSize = 1000000000000;

const acceptedFileTypes =
  'image/x-png, image/png, image/jpg, image/jpeg, image/gif';

class Photos extends Component {
  handleOnDrop = (files, rejectedFiles) => {
    const data = new FormData();
    data.append('userPhoto', files[0]);
    this.props.addPhoto(data);
  };

  render() {
    return (
      <div className="profile--questions">
        <span className="text--large--light underline">Photos</span>
        <Dropzone
          name="userPhoto"
          accept={acceptedFileTypes}
          activeStyle={{ background: 'black', opacity: 0.1 }}
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

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPhoto: (photo, id) => dispatch(addPhotoAsync(photo, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);

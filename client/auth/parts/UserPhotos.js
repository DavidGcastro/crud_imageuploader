import React from 'react';
import { connect } from 'react-redux';

const UserPhotos = props => {
  console.log(props.photos);
  return (
    <div className="profile--photo--container">
      <div className="profile--innerParent">
        {props.photos &&
          props.photos.map((x, i) => (
            <div key={i + Date.now()} className="photo--mini--container">
              <img
                className="photo"
                src="/assets/userPhotos/userPhoto-1543829911922.jpeg"
              />
              <button className="button--close photo--delete">x</button>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    photos: state.photoReducer.photos
  };
};
export default connect(mapStateToProps)(UserPhotos);

import React from 'react';
import { connect } from 'react-redux';
import { removePhotoAsync, setPhotoAsync } from '../../redux/reducers/photos';

class UserPhotos extends React.Component {
  componentDidMount() {
    this.props.setPhotos();
  }
  handleDelete = e => {
    this.props.deletePhoto(e.target.value);
  };

  render() {
    console.log(this.props.error);
    return (
      <div className="profile--photo--container">
        <div className="profile--innerParent">
          <span className="text--large--light" style={{ color: 'red' }}>
            {this.props.error}
          </span>

          {this.props.photos &&
            this.props.photos.map((x, i) => (
              <div key={i} className="photo--mini--container">
                <img className="photo" src={x.path} />
                <button
                  type="button"
                  value={x.id}
                  onClick={e => this.props.deletePhoto(e.target.value)}
                  className="button--close photo--delete">
                  x
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photoReducer.photos,
    error: state.photoReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePhoto: id => dispatch(removePhotoAsync(id)),
    setPhotos: () => dispatch(setPhotoAsync())
    // addQuestion: id => dispatch(questionsSelected(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPhotos);

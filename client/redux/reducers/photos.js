import axios from 'axios';
const ADD_PHOTO = 'ADD_PHOTOS';
const REMOVE_PHOTO = 'REMOVE_PHOTO';
const SET_PHOTOS = 'SET_PHOTOS';
const ERROR = 'ERROR';
const addPhoto = photo => ({ type: ADD_PHOTO, photo });
const removePhoto = () => ({ type: REMOVE_PHOTO });
const setPhotos = photos => ({ type: SET_PHOTOS, photos });
const errorHandler = errMsg => ({ type: ERROR, error: errMsg });

export const setPhotoAsync = id => (dispatch, getState) => {
  axios
    .get(`api/photos/`)
    .then(photos => dispatch(setPhotos(photos.data)))
    .catch(() =>
      dispatch(errorHandler('Problem retrieving images from server'))
    );
};
export const addPhotoAsync = photo => dispatch => {
  axios
    .post(`api/photos/`, photo)
    .then(res => dispatch(addPhoto(res.data.path)))
    .then(() => dispatch(setPhotoAsync()))
    .catch(() => dispatch(errorHandler('Problem Adding Image')));
};

export const removePhotoAsync = id => dispatch => {
  axios
    .delete(`api/photos/${id}`)
    .then(() => dispatch(removePhoto()))
    .then(() => dispatch(setPhotoAsync()))
    .catch(() => dispatch(errorHandler('Problem Deleting Image')));
};

/* REDUCER */
export default function(initialState = { photos: [] }, action) {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        ...initialState,
        photos: [...initialState.photos, action.photo]
      };
    case REMOVE_PHOTO:
      return {
        ...initialState,
        photos: [...initialState.photos]
      };

    case SET_PHOTOS:
      return { ...initialState, photos: action.photos };

    case ERROR:
      return { ...initialState, error: action.error };

    default:
      return initialState;
  }
}

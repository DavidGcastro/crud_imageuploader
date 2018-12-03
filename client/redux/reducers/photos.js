import axios from 'axios';
const ADD_PHOTO = 'ADD_PHOTOS';
const REMOVE_PHOTO = 'REMOVE_PHOTO';
const SET_PHOTOS = 'SET_PHOTOS';
const addPhoto = photo => ({ type: ADD_PHOTO, photo });
const removePhoto = () => ({ type: REMOVE_PHOTO });
const setPhotos = photos => ({ type: SET_PHOTOS, photos });

export const addPhotoAsync = (photo, id) => dispatch => {
  axios
    .post(`api/photos/${id}`, photo)
    .then(res => dispatch(addPhoto(res.data.path)))
    .catch(err => console.log(err));
};

export const removePhotoAsync = id => dispatch => {
  axios
    .delete(`api/photos/${id}`)
    .then(() => dispatch(removePhoto()))
    .catch(err => console.log(err));
};

export const setPhotoAsync = id => dispatch => {
  axios
    .get(`api/photos/${id}`)
    .then(photos => dispatch(setPhotos(photos.data)))
    .catch(err => console.log(err));
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

    default:
      return initialState;
  }
}

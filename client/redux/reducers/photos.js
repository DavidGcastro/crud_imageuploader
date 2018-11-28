import axios from 'axios';
const SET_PHOTO = 'SET_PHOTOS';

const setPhoto = photo => ({ type: SET_PHOTO, photo });

export const getPhotoAsync = photo => dispatch =>
  axios
    .post(`api/photos/${id}`, { photo })
    .then(newPhoto => dispatch(setPhoto(newPhoto)))
    .catch(err => console.log(err));

/* REDUCER */
export default function(initialState = {}, action) {
  switch (action.type) {
    case SET_PHOTO:
      return {
        ...initialState,
        photos: this.photos.slice().push(action.photo)
      };

    default:
      return initialState;
  }
}

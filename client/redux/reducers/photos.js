import axios from 'axios';
const ADD_PHOTO = 'ADD_PHOTOS';
const REMOVE_PHOTO = 'REMOVE_PHOTOS';

const addPhoto = photo => ({ type: ADD_PHOTO, photo });
const removePhoto = photoToDelete => ({ type: REMOVE_PHOTO, photo });

export const addPhotoAsync = (photo, id) => dispatch =>
  axios
    .post(`api/users/photos/${id}`, { userPhoto: photo })
    .then(newPhoto => dispatch(addPhoto(newPhoto.data)))
    .catch(err => console.log(err));

/* REDUCER */
export default function(initialState = { photos: [] }, action) {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        ...initialState,
        photos: [...initialState.photos, action.photo]
      };

    default:
      return initialState;
  }
}

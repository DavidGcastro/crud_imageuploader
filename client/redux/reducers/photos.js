import axios from 'axios';
const ADD_PHOTO = 'ADD_PHOTOS';
const REMOVE_PHOTO = 'REMOVE_PHOTO';

const addPhoto = photo => ({ type: ADD_PHOTO, photo });
const removePhoto = () => ({ type: REMOVE_PHOTO });

export const addPhotoAsync = (photo, id) => dispatch => {
  axios
    .post(`api/users/photos/${id}`, { userPhoto: photo })
    .then(newPhoto => dispatch(addPhoto(newPhoto.data)))
    .catch(err => console.log(err));
};

export const removePhotoAsync = id => dispatch => {
  axios
    .delete(`api/photos/${id}`)
    .then(() => dispatch(removePhoto()))
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
    default:
      return initialState;
  }
}

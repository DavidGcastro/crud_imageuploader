import React from 'react';
let photoCount = [1, 2, 3, 4, 5, 6];
console.log(photoCount);

const UserPhotos = () => {
  return (
    <div className="profile--photo--container">
      {photoCount.map(x => (
        <div className="photo--mini--container">
          <img className="photo" src="assets/images/default.png" />
          <button className="button--close photo--delete">x</button>
        </div>
      ))}
    </div>
  );
};

export default UserPhotos;

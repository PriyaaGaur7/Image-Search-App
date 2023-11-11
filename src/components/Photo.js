// Photo.js
import React from "react";

const Photo = ({ photo, openModal }) => {
  return (
    <div onClick={() => openModal(photo)}>
      <img
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        alt={photo.title}
      />
    </div>
  );
};

export default Photo;

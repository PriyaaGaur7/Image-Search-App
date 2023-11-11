// PhotoList.js
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Photo from "./Photo";

const PhotoList = ({ photos, fetchMorePhotos, openModal }) => {
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={fetchMorePhotos}
      hasMore={true}
      loader={
        <div style={{ textAlign: "center", padding: "10px" }}>
          Loading more photos...
        </div>
      }
    >
      <div className="photo-list">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} openModal={openModal} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PhotoList;

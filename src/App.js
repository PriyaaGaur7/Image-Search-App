// App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import PhotoList from "./components/PhotoList";
import Modal from "./components/Modal";
import { searchPhotos, getRecentPhotos } from "./services/flickrApi";
import { saveSearchQuery, getSearchQueries } from "./services/storage";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [searchQueries, setSearchQueries] = useState(getSearchQueries());

  const fetchMorePhotos = async () => {
    // Implement logic to fetch more photos
  };

  const openModal = (photo) => {
    setIsOpen(true);
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    saveSearchQuery(query);
    setSearchQueries(getSearchQueries());

    if (query === "") {
      const recentPhotos = await getRecentPhotos();
      setPhotos(recentPhotos); // Assuming getRecentPhotos is defined
    } else {
      const searchResult = await searchPhotos(query);
      setPhotos(searchResult); // Assuming setPhotos is defined
    }
  };

  useEffect(() => {
    // Fetch recent photos on initial load
    getRecentPhotos().then((recentPhotos) => setPhotos(recentPhotos));
  }, []);

  return (
    <div>
      <Header setSearchQuery={handleSearch} searchPhotos={handleSearch} />
      <PhotoList
        photos={photos}
        fetchMorePhotos={fetchMorePhotos}
        openModal={openModal}
      />
      <Modal isOpen={isOpen} closeModal={closeModal} photo={selectedPhoto} />
    </div>
  );
};

export default App;

// Header.js
/*import React, { useState, useEffect } from "react";
import { saveSearchQuery, getSearchQueries } from "../services/storage";
import { getRecentPhotos } from "../services/flickrApi";

const Header = ({ setSearchQuery, searchPhotos }) => {
  const [searchQuery, setSearchQueryInternal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQueryInternal(query);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      searchPhotos(searchQuery).then((results) => {
        setSearchResults(results);
      });
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [searchQuery, searchPhotos]);

  useEffect(() => {
    const suggestions = getSearchQueries().slice(-5).reverse();
    setSearchSuggestions(suggestions);
  }, [searchQuery]);

  const handleSearch = async (query) => {
    setSearchQueryInternal(query);
    saveSearchQuery(query);

    if (query === "") {
      const recentPhotos = await getRecentPhotos();
      setSearchResults(recentPhotos);
    } else {
      const searchResult = await searchPhotos(query);
      setSearchResults(searchResult);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQueryInternal(suggestion);
    handleSearch(suggestion);
  };

  return (
    <header>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search photos..."
      />
      {searchResults && searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}

      {searchSuggestions &&
      Array.isArray(searchSuggestions) &&
      searchSuggestions.length > 0 ? (
        <div className="search-suggestions">
          <p>Suggestions: </p>
          <ul>
            {searchSuggestions
              .filter((suggestion) => suggestion !== "")
              .map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <div className="search-suggestions">
          <p>Default Suggestions: </p>
          <ul>
            {["Trees", "India festivals", "Flowers", "Books", "Library"].map(
              (suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;*/
// Header.js
import React, { useState, useEffect } from "react";
import { saveSearchQuery, getSearchQueries } from "../services/storage";
import { getRecentPhotos, searchPhotos } from "../services/flickrApi";

const Header = ({ setSearchQuery, searchPhotos }) => {
  const [searchQuery, setSearchQueryInternal] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const defaultSuggestions = ["Trees", "Festivals", "Flowers", "Books", "Library"];

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQueryInternal(query);
  };

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      searchPhotos(searchQuery).then((results) => {
        setSearchResults(results || []);
      });
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [searchQuery, searchPhotos]);

  useEffect(() => {
    const suggestions = getSearchQueries().slice(-5).reverse();
    setSearchSuggestions(suggestions || []);
  }, [searchQuery]);

  const handleSearch = async (query) => {
    setSearchQueryInternal(query);
    saveSearchQuery(query);

    try {
      if (query === "") {
        const recentPhotos = await getRecentPhotos();
        setSearchResults(recentPhotos || []);
      } else {
        const searchResult = await searchPhotos(query);
        setSearchResults(searchResult || []);
      }
    } catch (error) {
      console.error("Error setting search results:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQueryInternal(suggestion);
    handleSearch(suggestion);
  };

  return (
    <header>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search photos..."
      />
      {searchResults.length > 0 && (
        <div className="search-results">
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="search-suggestions">
        {defaultSuggestions.map((suggestion) => (
          <button className="sgtion"
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;





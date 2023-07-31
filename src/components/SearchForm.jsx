import React from "react";
import { useUnsplashContext } from "../context/Unsplash.context";
const SearchForm = () => {
  const { setSearchTerm } = useUnsplashContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h2>search form component</h2>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="hello"
        />
        <button className="btn">Search</button>
      </form>
    </section>
  );
};

export default SearchForm;

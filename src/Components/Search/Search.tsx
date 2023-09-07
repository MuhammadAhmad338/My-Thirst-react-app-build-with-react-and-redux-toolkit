import { ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { useDispatch, useSelector } from "react-redux";
import { search, updateQuery } from "../../Services/searchService";
import { RootState } from "../../Store/store";
import React from "react";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const searchDispatch = useAppDispatch();

  const query = useSelector((state: RootState) => state.search.query);
  const results = useSelector((state: RootState) => state.search.results);

  const handleChangeAndSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedQuery = e.target.value;
    searchDispatch(search(updatedQuery));
  };

  const handleSearchClick = () => {
    dispatch(updateQuery(query));
  };

  return (
    <React.Fragment>
      <div className="search">
        <input
          type="text"
          name="search"
          onChange={handleChangeAndSearch}
          className="searchInput"
          placeholder="Search Item"
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div>{results && results.map((item) => <p>{item.title}</p>)}</div>
      <div>{!results && <div>Search Products</div>}</div>
    </React.Fragment>
  );
};

export default Search;

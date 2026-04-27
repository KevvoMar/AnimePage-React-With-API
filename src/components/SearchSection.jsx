import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchSection = ({ query, setQuery, handleSearch, filter, setFilter }) => {
    return (
        <section id="landing">
            <div className="container">
                <div className="search__wrapper">
                    <h1 className="landing__title">Welcome to Ultra Anime</h1>
                    <p className="landing__para">Find the top anime shows and movies instantly!</p>

                    <div className="search__container">
                        <input
                            type="text"
                            className="landing__search-bar"
                            placeholder="Search anime..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        />

                        <a href="#results">
                            <button className="search-btn" onClick={handleSearch}>
                                <FaSearch className="fas fa-search click" />
                            </button>
                        </a>
                    </div>

                    <div className="filters">
                        <select
                            className="sort-select"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option disabled value="">Sort</option>
                            <option value="az">A → Z</option>
                            <option value="za">Z → A</option>
                        </select>

                        <div className="filter-btns">
                            <button className={`filter-btn click ${filter === "popular" ? "filter-btn-active" : ""}`} onClick={() => setFilter("popular")}>Popular</button>
                            <button className={`filter-btn click ${filter === "new" ? "filter-btn-active" : ""}`} onClick={() => setFilter("new")}>New</button>
                            <button className={`filter-btn click ${filter === "old" ? "filter-btn-active" : ""}`} onClick={() => setFilter("old")}>Old</button>

                            <a href="#results">
                                <button className="filter-btn reset-filters--btn click" onClick={() => setFilter("")}>
                                    Reset Filters
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;

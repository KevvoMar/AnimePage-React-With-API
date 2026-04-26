import React, { useState, useEffect } from 'react';
import SearchSection from '../components/SearchSection';
import axios from 'axios';
import Results from '../components/Results';

const AnimePage = () => {
    const [query, setQuery] = useState("");
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const [filteredAnimeList, setFilteredAnimeList] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    async function handleSearch() {
        if (!query.trim()) return;

        setLoading(true);
        await getData();
        setLoading(false);
        setHasSearched(true);
    }


    async function getData() {
        try {
            const response = await axios.get(
                `https://api.jikan.moe/v4/anime?q=${query}&limit=25`
            );
            setAnimeList(response.data.data);
        } catch (error) {
            console.error("API error:", error);
        }
    }

    useEffect(() => {
        let copy = [...animeList];

        if (filter === "popular") {
            copy.sort((a, b) => b.score - a.score);
        }

        if (filter === "new") {
            copy.sort((a, b) => (b.year || 0) - (a.year || 0));
        }

        if (filter === "old") {
            copy.sort((a, b) => (a.year || 0) - (b.year || 0));
        }

        if (filter === "az") {
            copy.sort((a, b) => a.title.localeCompare(b.title));
        }

        if (filter === "za") {
            copy.sort((a, b) => b.title.localeCompare(a.title));
        }

        setFilteredAnimeList(copy);

    }, [filter, animeList]);

    return (
        <>
            <SearchSection
                query={query}
                setQuery={setQuery}
                handleSearch={handleSearch}
                filter={filter}
                setFilter={setFilter}
            />

            <Results 
                animeList={filteredAnimeList}
                loading={loading} 
                hasSearched={hasSearched}
                />
        </>
    );
};

export default AnimePage;

import React, {useState} from 'react';
import { movieApi, tvApi } from '../../api';
import SearchPresenter from './SeachPresenter';

const SearchContainer = () => {
    const [keyword, setKeyword] = useState(''); // 상태값
    const [results, setResults] = useState({
        movies: [],
        tvs: [],
        moviesError: null,
        tvsError: null 
    })

    const [loading, setLoading] = useState(false);
    const onChange = text => setKeyword(text);

    const handleSubmit = async() => {
        if (keyword === "") {
            return;
        }
        setLoading(true)
        const [movies, moviesError] = await movieApi.search(keyword)
        const [tvs, tvsError] = await tvApi.search(keyword)
        setResults({
            movies,
            tvs,
            moviesError,
            tvsError
        })
        
        setLoading(false)
    }

    return (
        <SearchPresenter 
            {...results}
            onChange={onChange}
            onSubmit={handleSubmit}
            keyword={keyword}
            placeHolder={"search movie & tv"}
        />
    );
};

export default SearchContainer;
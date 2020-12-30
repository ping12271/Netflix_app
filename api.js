import axios from 'axios'; // 네트워킹 라이브러리

const TMDB_KEY = "2a8d5e0f030c7e7a6874babe7ee07e28" //인증키

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    });

const getAnything = async(path, params = {}) => {
    try{
        const {
            data: {results},
            data
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch (e) {
        return [null, e];
    }
};

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming"),
    search: (query) => getAnything("/search/movie", {query}),
    detail: (id) => getAnything(`/movie/${id}`)
};

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: (query) => getAnything("/search/tv", {query}),
    detail: (id) => getAnything(`/tv/${id}`)
}

export const apiImage = (path) => (
    `https://image.tmdb.org/t/p/w500${path}`
)

// const makeRequest = (path, params) => {
//     axios.get(`https://api.themoviedb.org/3${path}`, {
//         params: {
//             ...params,
//             api_key: TMDB_KEY
//         }
//     });
// } //기본이 되는 URL

// const getAnything = async(path, params = {}) => {
//     try {
//         const {
//             data: {results},
//             data
//         } = await makeRequest(path, params)
//         return [results || data, null]
//     } catch (e) {
//         return [null, e]; //async await 비동기방식
//     }
// } //어떤 데이터를 받아 올 것인지에 대한 함수

// export const movieAp = {   
//     nowPlaying: () => getAnything("/movie/now_playing"),
//     popular: () => getAnything("/movie/popular"),
//     upcoming: () => getAnything("/movie/upcoming")
// };

// export const TvApi = {
//     today: () => getAnything("/tv/airing_today"),
//     thisWeek: () => getAnything("/tv/on_the_air"),
//     topRated: () => getAnything("/tv/top_rated"),
//     popular: () => getAnything("/tv/popular")
// };
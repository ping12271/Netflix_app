import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { movieApi } from '../api';

const Movies = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null // 값이 없음
    })

    const getData = async() => {
       const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
       //데이터가 정상적으로 들어오면 nowPlaying에 담기고, 아니면 nowPlayingError에 담긴다
       const [popular, popularError] = await movieApi.popular();
       const [upcoming, upcomingError] = await movieApi.upcoming();
       console.log(nowPlaying)
       setMovies({
           nowPlaying: nowPlaying, // nowPlaying라는 배열에 nowPlaying 데이터를 넣겠다는 의미
           popular: popular,
           upcoming: upcoming,
           nowPlayingError: nowPlayingError,
           popularError: popularError,
           upcomingError: upcomingError
       })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={{flex:1, backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>
                {movies.nowPlaying?.length}
            </Text>
            <Text style={{color: 'white'}}>
                popular Data is {movies.popular?.length}
            </Text>
        </View>
    );
};

export default Movies;
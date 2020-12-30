import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { movieApi, tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({route: {params: {id, title}}}) => {
    
    const navigation = useNavigation();

    const [data, setData] = useState({});

    const [similar, setSimilar] = useState([])
   
    const getData = async () => {
        const [movieData, movieDataError] = await movieApi.detail(id)
        const [similarData, similarDataError] = await movieApi.similar(id)
        setData(movieData)
        setSimilar(similarData)
    }



    useEffect(() => {
        getData();
    }, [])
    
    useLayoutEffect(() => {
        navigation.setOptions({title});
    }); // 레이아웃에 대한 구성을 초기화하는 것
    
    return (
        <DetailPresenter 
            id={id}
            title={title}
            backdrop_path={data.backdrop_path}
            overView={data.overview}
            poster={data.poster_path}
            votes={data.vote_average}
            date={data.release_date}
            language={data.original_language}
        />
    );
};

export default DetailContainer;
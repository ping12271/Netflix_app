import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { movieApi, tvApi } from '../../api';
import DetailPresenter from './DetailPresenter';

const DetailContainer = ({route: {params: {id, title}}}) => {
    
    const navigation = useNavigation();

    const [data, setData] = useState({});

    const getData = async () => {
        const [movieData, movieDataError] = await movieApi.detail(id)
        setData(movieData)
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
            poster_path={data.poster_path}
            overView={data.overview}
        />
    );
};

export default DetailContainer;
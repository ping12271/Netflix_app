import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { tvApi } from '../../api';

const TvContainer = () => {
    const [tvs, setTvs] = useState({
        airing_today: [],
        on_the_air: [],
        top_rated: [],
        popular: [],
        airing_todayError: null,
        on_the_airError: null,
        top_ratedError: null,
        popularError: null
    })

    const getData = async() => {
        const [airing_today, airing_todayError] = await tvApi.today();
        const [on_the_air, on_the_airError] = await tvApi.thisWeek();
        const [top_rated, top_ratedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
        console.log('++++', popular)
        setTvs({
            airing_today,
            on_the_air,
            top_rated,
            popular,
            airing_todayError,
            on_the_airError,
            top_ratedError,
            popularError
        }) 
        
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View style={{ flex:1, backgroundColor: 'black' }}>
            <Text style={{color: 'white'}}>
                {tvs.popular?.length}
            </Text>
            <Text style={{color: 'white'}}>
                on_the_air Data is {tvs.popular?.length}
            </Text>
        </View>
    );
};

export default TvContainer;
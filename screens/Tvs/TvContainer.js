import React, { useEffect, useState } from 'react';
import { tvApi } from '../../api';
import TvPresenter from './TvPresenter';

const TvContainer = () => {
    const [tvs, setTvs] = useState({
        loading: true,
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
        console.log('++++', airing_today)
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
        <TvPresenter {...tvs} />
    );
};

export default TvContainer;
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ScrollContainer from '../../components/ScrollContainer';
import Title from '../../components/Title';
import Horizental from '../../components/Horizental';
import Vertical from '../../components/Vertical';
import HorizontalSlide from '../../components/HorizontalSlide';
import VerticalSlide from '../../components/VerticalSlide';

const TvPresenter = ({airing_today, on_the_air, top_rated, popular, loading}) => {
    return (
        <ScrollContainer loading={loading}>
            <HorizontalSlide 
                title={"Airing Today"}
            >
                {airing_today.map(tv => (
                    <Horizental 
                        key={tv.id}
                        id={tv.id}
                        poster={tv.poster_path}
                        title={tv.name}
                        vote={tv.vote_average}
                    />
                ))}

            </HorizontalSlide>
            <HorizontalSlide 
                title={"On the Air"}
            >
                {on_the_air.map(tv => (
                    <Horizental 
                        key={tv.id}
                        id={tv.id}
                        poster={tv.poster_path}
                        title={tv.name}
                        vote={tv.vote_average}
                    />
                ))}
                
            </HorizontalSlide>

            <HorizontalSlide 
                title={"Top Rated"}
            >
                {top_rated.map(tv => (
                    <Horizental 
                        key={tv.id}
                        id={tv.id}
                        poster={tv.poster_path}
                        title={tv.name}
                        vote={tv.vote_average}
                    />
                ))}
                
            </HorizontalSlide>

            <VerticalSlide 
                title={"Popular Show"}
            >
                {popular.map(tv => (
                    <Vertical 
                        key={tv.id}
                        id={tv.id}
                        title={tv.name}
                        date={tv.first_air_date}
                        poster={tv.poster_path}
                        overView={tv.overview}
                    />
                ))}
                
            </VerticalSlide>

        </ScrollContainer>
    );
};

TvPresenter.propTypes = {
    airing_today: PropTypes.array,
    on_the_air: PropTypes.array,
    top_rated: PropTypes.array,
    popular: PropTypes.array,
    loading: PropTypes.bool.isRequired
};

export default TvPresenter;
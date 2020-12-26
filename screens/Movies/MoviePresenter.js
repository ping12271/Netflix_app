import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { Slide } from '../../components';
import Title from '../../components/Title';
import Horizental from '../../components/Horizental';
import Vertical from '../../components/Vertical';
import ScrollContainer from '../../components/ScrollContainer';
import VerticalSlide from '../../components/VerticalSlide';
import HorizontalSlide from '../../components/HorizontalSlide';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

const SlideContainer = styled.View`
    width: ${width}px;
    height: ${height / 3}px;
    margin-bottom: 30px;xs
`;

const Section = styled.View`
    height: 100%;
`;


const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
    return (
        <ScrollContainer loading={loading}>
            <>
                <SlideContainer>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie => (
                        <Section key={movie.id}>
                            <Slide 
                                    id={movie.id}
                                    title={movie.title}
                                    votes={movie.vote_average}
                                    overview={movie.overview}
                                    imgUrl={movie.backdrop_path}
                                    poster={movie.poster_path}
                            />
                        </Section>  
                        ))}
                    </Swiper>
                </SlideContainer>
            
                <HorizontalSlide title={"Popular Show"}>
                    {popular.map(movie => (
                        <Horizental 
                            key={movie.id}
                            id={movie.id}
                            poster={movie.poster_path}
                            title={movie.title}
                            vote={movie.vote_average}
                        />
                    ))}
                </HorizontalSlide>

                <VerticalSlide title={"Comming Soon"}>
                    {upcoming.map(movie => (
                        <Vertical 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            date={movie.release_date}
                            poster={movie.poster_path}
                            overView={movie.overview}
                        />
                    ))}
                </VerticalSlide>
            </>
        </ScrollContainer>
    );
};

export default MoviePresenter;

const styles = StyleSheet.create({
    
})
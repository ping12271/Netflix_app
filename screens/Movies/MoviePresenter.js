import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, ActivityIndicator, ActivityIndicatorBase, StyleSheet, View } from 'react-native';
import { Slide } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../components/Title';
import Horizental from '../../components/Horizental';

const { width, height } = Dimensions.get('screen');

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

const SlideContainer = styled.View`
    width: ${width}px;
    height: ${height / 3}px;
    margin-bottom: 40px;
`;

const Section = styled.View`
    height: 100%;
`;


const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
    return (
        <ScrollView 
            style={{ backgroundColor: 'black' }}
            contentContainerStyle={{flex: 1, justifyContent: loading ? 'center' : 'flex-start'}}
        >
            {loading ? (
                <ActivityIndicator color="white" size="large" /> // 로딩바
            ) : (
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

                    <View>
                        <Title title={"Popular Movies"}/>
                        <ScrollView horizontal>
                            {popular.map(movie => (
                                <Horizental 
                                    key={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}
                                    vote={movie.vote_average}
                                />
                            ))}
                        </ScrollView>
                    </View>
                </>
            )}
        </ScrollView>

    );
};

export default MoviePresenter;

const styles = StyleSheet.create({
    
})
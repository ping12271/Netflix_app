import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, Text, ActivityIndicator, ActivityIndicatorBase } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

const Header = styled.View`
    width: 100%;
    height: ${height / 3}px;
`;

const Section = styled.View`
    background-color: red;
    height: 100%;
`;


const MoviePresenter = ({ loading, nowPlaying, popular, upcoming }) => {
    return (
        <Container>
            {loading ? (
                <ActivityIndicator color="white" size="large" /> // 로딩바
            ) : (
                <Header>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie => (
                          <Section key={movie.id}>
                              <Text>{movie.title}</Text>
                          </Section>  
                        ))}
                    </Swiper>
                </Header>
            )}
        </Container>




        // <Header>
        //     <Swiper>
        //         <Section>
        //             <Text>1</Text>
        //         </Section>
        //         <Section>
        //             <Text>2</Text>
        //         </Section>
        //         <Section>
        //             <Text>3</Text>
        //         </Section>
        //     </Swiper>
        // </Header>
    );
};

export default MoviePresenter;
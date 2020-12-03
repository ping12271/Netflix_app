import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, Text, View } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Header = styled.View`
    width: 100%;
    height: ${height / 3}px;
`;

const Section = styled.View`
    background-color: red;
    height: 100%;
`;


const MoviePresenter = () => {
    return (
        <Header>
            <Swiper>
                <Section>
                    <Text>1</Text>
                </Section>
                <Section>
                    <Text>2</Text>
                </Section>
                <Section>
                    <Text>3</Text>
                </Section>
            </Swiper>
        </Header>
    );
};

export default MoviePresenter;
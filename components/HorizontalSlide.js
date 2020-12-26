import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import { ScrollView, StyleSheet } from 'react-native';

const HorizontalSlide = ({title, children}) => {
    return (
        <>
            <Title title={title} />
            <ScrollView
                style={{marginTop:20}}
                contentContainerStyle={{paddingLeft: 30}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {children}
            </ScrollView>
        </>
    );
};

HorizontalSlide.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default HorizontalSlide;
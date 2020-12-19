import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const Slide = ({title, votes, overview, imgUrl}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri : `https://image.tmdb.org/t/p/w500${imgUrl}` }}
                style={{ height: '100%', width: '100%', opacity: .6, position: 'absolute' }}
            />
            <View style={styles.content}>
                <View style={styles.data}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.votesText}>{votes} / 10</Text>
                    <Text style={styles.overviewText}>{overview}</Text>
                </View>
            </View>
        </View>
    );
};

Slide.propTypes = {
    title: PropTypes.string,
    votes: PropTypes.number,
    overview: PropTypes.string,
    imgUrl: PropTypes.string
};

export default Slide;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    content: {
        flexDirection: 'row',
    },
    data: {
        width: '50%',
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    votesText: {
        color: 'white',
        opacity: .7,
    },
    overviewText: {
        color: 'white',
        opacity: .7,
    },
})
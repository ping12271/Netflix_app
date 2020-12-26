import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Votes from './Votes';

const Horizental = ({poster, title, vote}) => {
    return (
        <View style={styles.container}>
            <Poster src={poster} />
            <Text style={{ color: 'white' }}>{title}</Text>
            <Votes vote={vote} />
        </View>
    );
};

Horizental.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote: PropTypes.number
};

export default Horizental;

//rscp 단축키

const styles = StyleSheet.create({
    container: {
        
    }
})
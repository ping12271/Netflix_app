import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Votes from './Votes';
import { trimText } from '../components/utils'

const Horizental = ({poster, title, vote}) => {
    return (
        <TouchableOpacity onPress={() => alert('이이이')}>
            <View style={styles.container}>
                <Poster src={poster} />
                <Text style={styles.title}>{trimText(title, 10)}</Text>
                <Votes vote={vote} />
            </View>
        </TouchableOpacity>
    );
};

Horizental.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote: PropTypes.number
};

export default Horizental;

//rscp 단축키

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 10
    },
    title: {
        color: 'white',
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 5
    }
})
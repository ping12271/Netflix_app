import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Poster } from '../../components';
import { apiImage } from '../../api'
import PropTypes from 'prop-types';

const Slide = ({title, votes, overview, imgUrl, poster}) => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri : apiImage(imgUrl) }}
                style={{ height: '100%', width: '100%', opacity: .4, position: 'absolute' }}
            />
            <View style={styles.content}>
                <Poster src={poster} />
                <View style={styles.data}>
                    <Text style={styles.titleText}>{title.slice(0, 30)}</Text>
                    <Text style={styles.votesText}>⭐ {votes} / 10</Text>
                    <Text style={styles.overviewText}>{overview.slice(0, 120)}...</Text>
                    <TouchableOpacity onPress={() => alert("야")}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>View Detail</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

Slide.propTypes = {
    id: PropTypes.number.required,
    title: PropTypes.string,
    votes: PropTypes.number,
    overview: PropTypes.string,
    imgUrl: PropTypes.string,
    poster: PropTypes.string
};

export default Slide;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
    },
    data: {
        width: '50%',
        alignItems: 'flex-start',
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    votesText: {
        color: 'rgb(200, 220, 220)',
        marginBottom: 7,
        fontSize: 12,
    },
    overviewText: {
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 10,
        color: 'rgb(200, 220, 220)',
    },
    button: {
        marginBottom: 10,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
    }
})
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Poster } from '../../components';
import { apiImage } from '../../api'
import { trimText } from '../../components/utils'
import PropTypes from 'prop-types';
import Votes from '../Votes';

const Slide = ({id, title, votes, overview, imgUrl, poster}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri : apiImage(imgUrl) }}
                style={{ height: '100%', width: '100%', opacity: .4, position: 'absolute' }}
            />
            <View style={styles.content}>
                <Poster src={poster} />
                <View style={styles.data}>
                    <Text style={styles.titleText}>{trimText(title, 40)}</Text>
                    <Votes vote={votes} />
                    <Text style={styles.overviewText}>{trimText(overview, 120)}</Text>
                    <TouchableOpacity onPress={() => navigation.push('Detail', { title, id })}>
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
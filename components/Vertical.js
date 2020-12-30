import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Poster from './Poster';
import { trimText, formDate } from './utils';

const Vertical = ({id, title, date, poster, overView}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.navigate('Detail', {id, title})}>
            <View style={styles.container}>
                <Poster src={poster}/>
                <View style={styles.data}>
                    <Text style={styles.title}>{trimText(title, 30)}</Text>
                    {date ? <Text style={styles.date}>{formDate(date)}</Text> : null}
                    <Text style={styles.overView}>{trimText(overView, 120)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    poster: PropTypes.string,
    overView: PropTypes.string.isRequired
};

export default Vertical;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    data: {
        alignItems: 'flex-start',
        width: '60%',
        marginLeft: 25,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    overView: {
        marginTop: 10,
        color: 'white',
    },
    date: {
        color: 'white',
        fontSize: 12
    }
})
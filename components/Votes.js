import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Votes = ({vote}) => {
    return (
        <Text style={styles.container}>
            ⭐ {vote} / 10
        </Text>
    );
};

Votes.propTypes = {
    vote : PropTypes.number
};

export default Votes;

const styles = StyleSheet.create({
    container: {
        color: 'rgb(220, 220, 220)',
        marginBottom: 7,
        fontWeight: '500',
        fontSize: 12
    }
})
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const Votes = ({vote}) => {
    return (
        <Text style={styles.contaienr}>
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
        color: 'rgba(220, 220, 220, 1)',
        marginBottom: 7,
        fontWeight: '500',
        fontSize: 10
    }
})
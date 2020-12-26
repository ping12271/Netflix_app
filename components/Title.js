import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const Title = ({title}) => {
    return (
        <Text style={styles.title}>{title}</Text>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired // title의 속성은 string 타입,필수값
};

export default Title;

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
    }
})
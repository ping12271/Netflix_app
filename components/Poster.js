import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { apiImage } from '../api';

const Poster = ({url}) => {
    return (
        <Image 
            source={{ uri: apiImage(url) }}
            style={{ width: 100, height: 130, borderRadius: 4 }}
        />
    );
};

Poster.propTypes = {
    url: PropTypes.string
};

export default Poster;
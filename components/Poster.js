import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { apiImage } from '../api';

const Poster = ({src}) => {
    return (
        <Image 
            source={{ uri: apiImage(src) }}
            style={{ width: 110, height: 140, borderRadius: 4 }}
        />
    );
};

Poster.propTypes = {
    src: PropTypes.string
};

export default Poster;
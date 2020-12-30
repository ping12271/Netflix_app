import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const DetailPresenter = ({id, title, poster_path, overView}) => {
    return (
        <View>
            <Text>{id}</Text>
            <Text>{title}</Text>
            <Text>{overView}</Text>
        </View>
    );
};

DetailPresenter.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    overView: PropTypes.string.isRequired,
};

export default DetailPresenter;
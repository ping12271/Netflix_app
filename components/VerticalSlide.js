import React from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';
import { View } from 'react-native';

const VerticalSlide = ({title, children}) => {
    return (
        <>
            <Title title={title} />
            <View style={{ marginTop: 20 }}>
                {children}
            </View>
        </>
    );
};

VerticalSlide.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default VerticalSlide;
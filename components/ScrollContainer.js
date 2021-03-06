import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, ScrollView } from 'react-native';

const ScrollContainer = ({loading, children}) => {
    return (
        <ScrollView 
            style={{ backgroundColor: 'black' }}
            contentContainerStyle={{ 
                flex: loading ? 1 : 0, 
                justifyContent: loading ? 'center' : 'flex-start' 
            }}
        >
            {loading 
                ? <ActivityIndicator color="white" size="small" />
                : children
            }
        </ScrollView>    

    );
};

ScrollContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

export default ScrollContainer;
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const DetailContainer = ({route: {params: {id, title}}}) => {
    const navigation = useNavigation();
    navigation.setOptions({title})
    return (
        <View>
            <Text>
                {id}
            </Text>
        </View>
    );
};

export default DetailContainer;
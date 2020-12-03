import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'black',
                borderBottomColor: 'balck',
                shadowColor: 'black'
            },
            //headerTintColor : Header 색
            headerTintColor: '#fff',
            headerBackTitleVisible: false // 스택에 뒤로가기 텍스트 유무
        }}
    >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
);

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detail ({navigation}) {
    const item = navigation.getParam('item');
    return(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.descirption}</Text>
            <Text>{item.place}</Text>
        </View>
    )
}
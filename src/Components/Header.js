/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

import Colors from '../Theme/Color';

const { height } = Dimensions.get('screen');

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Icon name="arrow-left" color='black' size={40} />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'blue',
        height: height / 12,
        width: '100%',
    },
});

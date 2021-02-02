/* eslint-disable no-use-before-define */
/* eslint-disable indent */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableHighlight,
} from 'react-native';

import Colors from '../Theme/Color';

const { height } = Dimensions.get('screen');

export default function Header({ title, onPress, colorImage = 'black' }) {
    return (
        <View style={styles.headerContainer}>

            <TouchableHighlight
                style={styles.back}
                underlayColor='lightgray'
                onPress={() => onPress()}
            >
                {
                    colorImage === 'black'
                        ? <Image source={require('../Assest/Icons/back.png')} style={styles.back} />
                        : <Image source={require('../Assest/Icons/back-white.png')} style={styles.back} />
                }
            </TouchableHighlight>
            <Text style={styles.title}>{title || ''}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: height / 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: {
        borderRadius: 15,
        height: 30,
        width: 30,
    },
    title: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
});

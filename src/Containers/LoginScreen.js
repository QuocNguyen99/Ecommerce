import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../Components/Header';

export default function LoginScreen() {
    return (
        <View style={styles.b}>
            <Header />
        </View>
    );
}
const styles = StyleSheet.create({
    b: {
        flex: 1,
    },
});

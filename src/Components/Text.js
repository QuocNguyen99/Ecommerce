import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../Theme/Color'

export default function AppText({ title, style }) {
    return (
        <Text style={[styles.text, style]}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: Colors.black
    }
})

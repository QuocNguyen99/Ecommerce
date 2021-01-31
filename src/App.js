import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useTheme from './Theme/hooks/useTheme'

export default function App() {
  const {
    Common,
    Fonts,
    Gutters,
    Images,
    Layout,
    Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
  } = useTheme();
  return (
    <View>
      <Text style={Fonts.textRegular}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

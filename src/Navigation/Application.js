import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Colors from '../Theme/Color';
import { DarkTheme, LightTheme } from '../Theme/ThemeNavigation'
import LoginScreen from '../Containers/Auth/LoginScreen';
import RegisterScreen from '../Containers/Auth/RegisterScreen';

const Stack = createStackNavigator();

export default function Application() {
    return (
        <NavigationContainer theme={LightTheme}>
            <StatusBar
                barStyle='light-content'
                backgroundColor={Colors.primary}
            />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Register' component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})

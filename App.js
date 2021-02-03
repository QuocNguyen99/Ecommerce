import React from 'react';
import { View, Text } from 'react-native';
import TextInput from './src/Components/TextInput';
import LoginScreen from './src/Containers/Auth/LoginScreen';
import RegisterScreen from './src/Containers/Auth/RegisterScreen';
import Application from './src/Navigation/Application';

export default function App() {
  return (
    <Application />
  );
}

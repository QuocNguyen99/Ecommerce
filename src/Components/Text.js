/* eslint-disable no-use-before-define */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import Colors from '../Theme/Color';

export default function AppText({ style, children, ...otherProps }) {
  const { t } = useTranslation();
  return (
    <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.black,
  },
});

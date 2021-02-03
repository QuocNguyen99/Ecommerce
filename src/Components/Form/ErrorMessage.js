import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return (
    <Text title={error} style={styles.text} />
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 14
  },
});

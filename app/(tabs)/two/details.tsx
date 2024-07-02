import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Tab Two Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

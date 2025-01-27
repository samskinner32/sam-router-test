import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab One</Text>
      <Link href="/two/details" asChild>
        <Button title="Go to Tab Two details" />
      </Link>
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

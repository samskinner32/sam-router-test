import { Stack } from 'expo-router';

export default function TwoStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Index' }} />
      <Stack.Screen name="details" options={{ title: 'Details' }} />
    </Stack>
  );
}

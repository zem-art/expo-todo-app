import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        animation: "slide_from_right"
      }}
    >
      <Stack.Screen name="sign-in"/>
      <Stack.Screen name="sign-up"/>
    </Stack>
  );
}

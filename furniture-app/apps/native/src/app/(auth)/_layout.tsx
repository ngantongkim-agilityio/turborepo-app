import { Stack } from 'expo-router';

// Constants
import { ROUTES_NAME } from '@repo/constants';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true
      }}
    >
      <Stack.Screen
        name={ROUTES_NAME.LOGIN}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={ROUTES_NAME.SIGNUP}
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default AuthLayout;

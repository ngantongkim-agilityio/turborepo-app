import { Stack, useRouter } from 'expo-router';

const SignUpLayout = () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTransparent: true
      }}
    >
      <Stack.Screen
        name='index'
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='verify-code'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default SignUpLayout;

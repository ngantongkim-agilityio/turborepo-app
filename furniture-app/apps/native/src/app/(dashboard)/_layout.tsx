import { Stack } from 'expo-router';

// Constants
import { ROUTES_NAME } from '@repo/constants';

const DashboardLayout = () => {
  return (
    <Stack
      initialRouteName={ROUTES_NAME.TABS}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ROUTES_NAME.TABS}
        options={{
          headerShown: false
        }}
      />
    </Stack>
  );
};

export default DashboardLayout;

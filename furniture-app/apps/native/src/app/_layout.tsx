import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { Provider } from 'app/provider';

// Constants
import { ROUTES_NAME } from '@repo/constants';

// export const unstable_settings = {
//   // Ensure that reloading on `/user` keeps a back button present.
//   initialRouteName: 'Home'
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// const RootLayoutNav = () => {
//   const colorScheme = useColorScheme();

//   return (
//     <Provider>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack />
//         <NativeToast />
//       </ThemeProvider>
//     </Provider>
//   );
// }

const App = () => {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  });

  const queryClient = new QueryClient();
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        {/* <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        > */}
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name={ROUTES_NAME.INDEX} />
            <Stack.Screen name={ROUTES_NAME.AUTH} />
            <Stack.Screen name={ROUTES_NAME.DASHBOARD} />
          </Stack>
        </SafeAreaProvider>
        {/* </ThemeProvider>yar */}
      </Provider>
    </QueryClientProvider>
  );
};

export default App;

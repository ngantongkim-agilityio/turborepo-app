import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'tamagui';

// Components
import { Header, SearchIcon } from '@repo/ui';

// Themes

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor='$light'
        barStyle='dark-content'
      />
      <Stack width={'100%'}>
        <Header
          title='Notification'
          leftIcon={
            <SearchIcon
              color='$secondary'
              width={20}
              height={20}
              isLarge={false}
            />
          }
        />
      </Stack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$light'
  }
});

export default Notification;

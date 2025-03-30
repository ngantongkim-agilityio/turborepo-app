import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground, StyleSheet } from 'react-native';
import { router } from 'expo-router';

// Components
import { Text, H1, YStack } from 'tamagui';
import { Button } from '@repo/ui';

// Images
import Images from '@assets/images/index';

const Onboarding = () => {
  const handleNavigateLogin = () => {
    router.push(`/(auth)/login`);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={Images.landingBg}
      resizeMode='cover'
    >
      <SafeAreaView style={styles.contentWrapper}>
        <YStack height={'50%'}>
          <YStack>
            <Text
              fontWeight={'600'}
              color='$tertiary'
              fontSize={24}
              textTransform='uppercase'
              letterSpacing={1.2}
            >
              Make your
            </Text>
            <H1
              mt={15}
              fontWeight={'700'}
              color='$dark'
              fontSize={30}
              textTransform='uppercase'
            >
              Home beautiful
            </H1>
            <Text
              fontWeight={'normal'}
              mt={35}
              ml={30}
              color='$primary'
              fontSize={18}
              lineHeight={35}
            >
              The best simple place where you discover most wonderful furnitures
              and make your home beautiful
            </Text>
          </YStack>
          <Button mt={30} width={159} height={56} onPress={handleNavigateLogin}>
            Get started
          </Button>
        </YStack>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  contentWrapper: {
    flex: 1,
    padding: 20
  }
});

export default Onboarding;

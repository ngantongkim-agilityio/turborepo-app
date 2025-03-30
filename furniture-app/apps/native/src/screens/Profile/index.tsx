import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Avatar, Text } from 'tamagui';
import { useRouter, Link } from 'expo-router';

// Components
import { Header, ProfileCard, SearchIcon, LogoutIcon } from '@repo/ui';

// Constants
import { SCREEN, AUTH_STORE_KEY } from '@repo/constants';

// Hooks
import { useAuth } from '@repo/hooks';

// Stores
import { authStore, userStore } from '@repo/stores';

// Types
import { IQueryParams } from '@repo/models';

// Mocks
import { PROFILE_DATA } from '@mocks';

const Profile = () => {
  const router = useRouter();
  const [removeAuth, authKey] = authStore((state) => [
    state.removeAuth,
    state.authKey
  ]);
  const [user] = userStore((state) => [state.user]);

  const { auth_key = '', uuid = '' } = authKey || {};
  const { first_name = '', last_name = '', email = '' } = user || {};

  const {
    logOut: { mutate }
  } = useAuth();

  const handleLogout = () => {
    const payload: IQueryParams = {
      uuid,
      auth_key
    };

    AsyncStorage.removeItem(AUTH_STORE_KEY);
    removeAuth();

    if (!!uuid && !!auth_key) {
      mutate(payload, {
        onSuccess: () => {
          router.navigate(`/(auth)/login`);
        },
        onError: (error) => {
          console.log(error);
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor='$light'
        barStyle='dark-content'
      />
      <Stack width={'100%'}>
        <Header
          title='Profile'
          leftIcon={
            <SearchIcon
              color='$secondary'
              width={20}
              height={20}
              isLarge={false}
            />
          }
          rightIcon={LogoutIcon}
          onPressRight={handleLogout}
        />
      </Stack>
      <Stack width={'100%'} mb={35} flexDirection='row'>
        <Avatar circular size={80}>
          <Avatar.Image src={PROFILE_DATA.avatar} />
        </Avatar>
        <Stack ml={20}>
          <Text fontWeight={'700'} color='$dark' fontSize={20}>
            {first_name} {last_name}
          </Text>
          <Text
            my={10}
            fontWeight={'400'}
            color='$primary'
            fontSize={14}
            lineHeight={15}
          >
            {email}
          </Text>
        </Stack>
      </Stack>
      <Stack width={'100%'} pb={50}>
        <ProfileCard
          title='My orders'
          description={`Already have ${PROFILE_DATA.orders} orders`}
        />
        <ProfileCard
          title='Shipping Addresses'
          description={`${PROFILE_DATA.shippingAddress} Addresses`}
        />
        <ProfileCard
          title='Payment Method'
          description={`Already have ${PROFILE_DATA.paymentMethod} cards`}
        />
        <ProfileCard
          title='My reviews'
          description={`Reviews for ${PROFILE_DATA.reviews} items`}
        />
        <ProfileCard
          title='Setting'
          description='Notification, Password, FAQ, Contact'
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

export default Profile;

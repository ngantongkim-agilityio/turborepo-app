'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

// Components
import { Text, Stack } from 'tamagui';
import { Button, Input, LogoIcon } from '@repo/ui';

// Types
import {
  IUserFormInput,
  ILoginParams,
  IResponseApi,
  IUser
} from '@repo/models';

// Hooks
import { useAuth } from '@repo/hooks';

// Stores
import { authStore, userStore } from '@repo/stores';

import { APP_ROUTES } from '@repo/constants';

interface IForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const [setAuthKey] = authStore((state) => [state.setAuthKey]);
  const [setUser] = userStore((state) => [state.setUser]);

  const {
    logIn: { mutate }
  } = useAuth();

  const handleLogin = ({ email, password }: IUserFormInput) => {
    const uuid = `${Date.now()}`;
    const data: ILoginParams<IUserFormInput> = {
      user: {
        email,
        password,
        uuid,
        type: 'customer'
      }
    };

    mutate(data, {
      onSuccess: (data: IResponseApi<ILoginParams<IUser>>) => {
        const { data: authData } = data || {};
        const { user } = authData || {};
        const { key } = user || {};

        !!key && setAuthKey({ ...key, uuid });
        setUser(user);
        console.log('test 1234');
        // router.push('/home');
      },
      onError: (error) => {
        console.log(error);
      }
    });
  };
  return (
    <main>
      <Stack flex={1} width='100vw' height='100vh' justify='center'>
        <Stack items='center'>
          <Stack width='100%' mb={40} maxW={500}>
            <LogoIcon />
            <Stack mt={20}>
              <Text
                fontWeight={'400'}
                color='$textLight'
                fontSize={30}
                lineHeight={45}
              >
                Hello !
              </Text>
              <Text
                fontWeight={'700'}
                color='$dark'
                fontSize={24}
                lineHeight={45}
                textTransform='uppercase'
              >
                Welcome back
              </Text>
            </Stack>
            <View style={styles.boxShadow}>
              <Stack>
                <Controller
                  name='email'
                  control={control}
                  render={({ field: { onChange, ...props } }) => {
                    return (
                      <Input
                        id='email'
                        label='Email'
                        mb={35}
                        onChangeText={onChange}
                        {...props}
                      />
                    );
                  }}
                />
                <Controller
                  name='password'
                  control={control}
                  render={({ field: { onChange, ...props } }) => {
                    return (
                      <Input
                        id='password'
                        label='Password'
                        onChangeText={onChange}
                        secureTextEntry
                        {...props}
                      />
                    );
                  }}
                />
              </Stack>
              <Stack pt={20} mt={20}>
                <View style={styles.buttonBoxShadow}>
                  <Button
                    variant='primary'
                    height={56}
                    justify='center'
                    items='center'
                    onPress={handleSubmit(handleLogin)}
                  >
                    Log in
                  </Button>
                </View>
                <Link
                  className='font-semibold text-primary text-sm'
                  href={APP_ROUTES.SIGNUP}
                >
                  Sign up
                </Link>
              </Stack>
            </View>
          </Stack>
        </Stack>
      </Stack>
    </main>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  boxShadow: {
    width: '100%',
    paddingVertical: 20,
    marginTop: 10,
    backgroundColor: '$light',
    shadowColor: '$shadowPrimary',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 15
  },
  buttonBoxShadow: {
    borderRadius: 8,
    marginBottom: 28,
    backgroundColor: '$light',
    shadowColor: 'shadowSecondary',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 15
  },
  lineStyle: {
    width: '35%',
    borderRadius: 2,
    height: 1,
    backgroundColor: '$bgLight'
  }
});

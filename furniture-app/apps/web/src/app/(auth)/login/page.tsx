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
        console.log('test 12');
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
            <View>
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
                <Stack mb={20}>
                  <Button
                    variant='primary'
                    height={56}
                    justify='center'
                    items='center'
                    onPress={handleSubmit(handleLogin)}
                  >
                    Log in
                  </Button>
                </Stack>
                <Link href={APP_ROUTES.SIGNUP}>Sign up</Link>
              </Stack>
            </View>
          </Stack>
        </Stack>
      </Stack>
    </main>
  );
};

export default LoginPage;

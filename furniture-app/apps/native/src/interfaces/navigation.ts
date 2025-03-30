import { IProduct } from '@repo/models';

export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
  MainTab: undefined;
  Landing: undefined;
  Login: undefined;
  Signup: undefined;
  VerifyCode: undefined;
  Home: undefined;
  ProductDetail: { product: IProduct };
};

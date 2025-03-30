// Libs
import { ScrollView, StyleSheet, Dimensions, View, Share } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Image, Text, Button as ButtonIcon } from 'tamagui';

// Components
import { Button, RateIcon, FavoriteIcon, BackIcon, ShareIcon } from '@repo/ui';

// Types
import { RootStackParamList } from '@interfaces';

// Constants
import { SCREEN } from '@repo/constants';

type ProductDetailNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN.PRODUCT_DETAIL
>;
const ProductDetail = ({ route }: ProductDetailNavigationProps) => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  const product = route.params.product;

  const handleBackPrevScreen = () => {
    goBack();
  };

  const handleShare = async () => {
    //TODO
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{ height: '100%', backgroundColor: '$bgTertiary' }}
        showsVerticalScrollIndicator={false}
      >
        <Stack flexDirection='row-reverse' width={'100%'}>
          <Image
            source={{ uri: product?.images?.[0] || '' }}
            resizeMode={'cover'}
            style={styles.image}
          />
          <View style={styles.boxShadow}>
            <ButtonIcon
              background='$light'
              gap={10}
              width={40}
              height={40}
              icon={BackIcon}
              onPress={handleBackPrevScreen}
            />
          </View>
        </Stack>
        <Stack>
          <Stack flexDirection='row'>
            <Text fontWeight={'500'} color='$dark' fontSize={24}>
              {product.title}
            </Text>
            <ButtonIcon
              background={'transparent'}
              width={40}
              height={40}
              icon={ShareIcon}
              onPress={handleShare}
            />
          </Stack>
          <Text my={10} fontWeight={'700'} color='$dark' fontSize={30}>
            $ {product.price.amount}
          </Text>
          <Stack flexDirection='row'>
            <RateIcon />
            <Text ml={10} fontWeight={'700'} color='$dark' fontSize={18}>
              {4.5}
            </Text>
          </Stack>
          <Text
            my={20}
            fontWeight={'300'}
            lineHeight={25}
            color='$tertiary'
            fontSize={14}
          >
            {product.description}
          </Text>
          <Stack flexDirection='row'>
            <ButtonIcon
              background='bgPrimary'
              width={60}
              height={'100%'}
              icon={FavoriteIcon}
              onPress={() => {}}
            />
            <Button
              title='Add to cart'
              width={Dimensions.get('window').width - 120}
              variant='primary'
              onPress={() => {}}
            />
          </Stack>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: Dimensions.get('window').width - 60,
    height: 455,
    borderBottomLeftRadius: 45
  },
  boxShadow: {
    position: 'absolute',
    right: 30,
    top: 30,
    borderRadius: 6,
    backgroundColor: '$light',
    shadowColor: '$shadowSecondary',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 15
  }
});

export default ProductDetail;

// Libs
import { memo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Stack, Image, Text, Button } from 'tamagui';

// Components
import { CloseIcon, BagIcon } from '../icons';

// Types
import { IProduct } from '@repo/models';

interface IProductCardProps {
  product: IProduct;
}

const FavoriteCard = ({ product }: IProductCardProps) => {
  const { title = '', images = [], price = { amount: '' } } = product || {};

  return (
    <Stack
      width={'100%'}
      flexDirection='row'
      borderBottomWidth={1}
      borderColor={'$bgPrimary'}
    >
      <Stack flexDirection='row'>
        <Image
          source={{ uri: images[0] }}
          resizeMode={'cover'}
          style={styles.image}
        />
        <Stack marginInline={20}>
          <Text fontWeight={'400'} color={'$tertiary'} fontSize={14} mb={5}>
            {title}
          </Text>
          <Text fontWeight={'700'} color={'$dark'} fontSize={14}>
            $ {price.amount}
          </Text>
        </Stack>
      </Stack>
      <Stack flexDirection='column' justify='space-between'>
        <Button width={24} height={24} icon={CloseIcon} onPress={() => {}} />
        <Button
          background={'&border'}
          width={34}
          height={34}
          icon={BagIcon}
          onPress={() => {}}
        />
      </Stack>
    </Stack>
  );
};

const styles = StyleSheet.create<Record<string, ViewStyle>>({
  image: {
    height: 100,
    width: 100,
    borderRadius: 6
  }
});

export default memo(FavoriteCard);

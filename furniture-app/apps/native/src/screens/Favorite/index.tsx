import {
  StyleSheet,
  StatusBar,
  FlatList,
  ListRenderItemInfo,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { Header, FavoriteCard, Button, SearchIcon, CartIcon } from '@repo/ui';

// Types
import { IProduct } from '@repo/models';

// Mocks
import { PRODUCTS_DATA } from '@mocks';

const Favorite = () => {
  const getKeyExtractor = ({ id }: IProduct) => id.toString();

  const renderItemProduct = ({ item }: ListRenderItemInfo<IProduct>) => {
    return <FavoriteCard product={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor='$light'
        barStyle='dark-content'
      />
      <Header
        title='Favorites'
        leftIcon={
          <SearchIcon
            color='$secondary'
            width={20}
            height={20}
            isLarge={false}
          />
        }
        rightIcon={
          <CartIcon color='$secondary' width={20} height={20} isLarge={false} />
        }
      />
      <FlatList
        data={PRODUCTS_DATA}
        keyExtractor={getKeyExtractor}
        renderItem={renderItemProduct}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.buttonBoxShadow}>
        <Button
          title='Add all to my cart'
          variant='primary'
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$light'
  },
  buttonBoxShadow: {
    width: '100%',
    position: 'absolute',
    bottom: 70,
    borderRadius: 8,
    backgroundColor: '$light',
    shadowColor: '$shadowSecondary',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 15
  }
});

export default Favorite;

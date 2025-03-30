import { useCallback } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import {
  Header,
  CategoryList,
  ProductList,
  SearchIcon,
  CartIcon
} from '@repo/ui';

// Constants
import { INIT_PAGE } from '@repo/constants';

// Hooks
import { useProducts } from '@repo/hooks';

// Utils
import { formatProducts, getProductList } from '@repo/utils';

// Mocks
import { CATEGORIES_DATA } from '@mocks';

const Home = () => {
  const { useFetchProducts } = useProducts();
  const { data, hasNextPage, fetchNextPage } = useFetchProducts(INIT_PAGE);
  const pages = data?.pages ?? [];
  const products = (pages.length > 0 && getProductList(pages)) || [];
  const formattedProducts =
    (products.length > 0 && formatProducts(products)) || [];

  const handleLoadMore = useCallback(async () => {
    hasNextPage && (await fetchNextPage());
  }, [hasNextPage, fetchNextPage]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor='$light'
        barStyle='dark-content'
      />
      <Header isHome leftIcon={SearchIcon} rightIcon={CartIcon} />
      <CategoryList categories={CATEGORIES_DATA} />
      <ProductList products={formattedProducts} onLoadMore={handleLoadMore} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$light',
    paddingHorizontal: 20
  }
});

export default Home;

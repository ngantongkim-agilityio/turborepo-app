// Libs
import { useInfiniteQuery } from '@tanstack/react-query';

// Constants
import { ROUTES } from '@repo/constants';

// Services
import { GET } from './services';

// Stores
import { authStore } from '@repo/stores';

// Types
import { IResponseApi } from '@repo/models';

type ResponseData = {
  listings: any[];
  page: number;
  pages?: any[];
};

export const useProducts = () => {
  const useFetchProducts = (initPageParam: number) => {
    const [authKey] = authStore((state) => [state.authKey]);

    return useInfiniteQuery<
      IResponseApi<ResponseData>,
      Error,
      IResponseApi<ResponseData>,
      string[]
    >({
      queryKey: [ROUTES.PRODUCTS],
      queryFn: ({ pageParam }) => {
        return GET<IResponseApi<ResponseData>>(
          `${ROUTES.PRODUCTS}?page=${pageParam}&per_page=6`,
          {
            headers: {
              'X-Auth-Key': `${authKey?.auth_key}`
            }
          }
        );
      },
      initialPageParam: initPageParam,
      getNextPageParam: (lastPage) => {
        const { data } = lastPage || {};
        const { listings, page } = data || {};
        const nextPage = page + 1;

        return listings?.length > 0 && listings?.length === 6 ? nextPage : null;
      }
    });
  };
  return { useFetchProducts };
};

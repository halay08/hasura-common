import {
  ApolloClient,
  ApolloQueryResult,
  createHttpLink,
  FetchResult,
  InMemoryCache,
  MutationOptions,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import 'cross-fetch/polyfill';

const adminSecret = process.env.ADMIN_SECRET;
const hgeEndpoint = process.env.HGE_ENDPOINT;

type AuthHeader = {
  'x-hasura-organization-id'?: string;
  'x-hasura-user-id'?: string;
  'x-hasura-role'?: string;
};

const getClient = (): ApolloClient<NormalizedCacheObject> => {
  const uri = `${hgeEndpoint}/v1/graphql`;
  const httpLink = createHttpLink({
    uri,
  });
  const authLink = setContext((request, { headers: h }) => ({
    headers: {
      ...h,
      'x-hasura-admin-secret': adminSecret,
      'x-hasura-default-role': 'WORKER',
    },
  }));
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};

// eslint-disable-next-line
export const query = <T = any, TVariables = OperationVariables>(
  options: QueryOptions<TVariables, T>,
  headers?: AuthHeader
): Promise<ApolloQueryResult<T>> => {
  return getClient().query({
    ...options,
    context: {
      headers: headers || {},
    },
  });
};

// eslint-disable-next-line
export const mutate = <T = any, TVariables = OperationVariables>(
  options: MutationOptions<T, TVariables>,
  headers?: AuthHeader
): Promise<FetchResult<T>> => {
  return getClient().mutate({
    ...options,
    context: {
      headers: headers || {},
    },
  });
};

import 'isomorphic-fetch'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
        uri: "https://",
        onError: ({ networkError, graphQLErrors }) => {
            console.log("graphQLErrors", graphQLErrors);
            console.log("networkError", networkError);
        }
});

export default client;
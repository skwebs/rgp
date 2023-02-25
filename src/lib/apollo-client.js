// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//     uri: import.meta.env.VITE_LARAVEL_GRAPHQL_URL,
//     // uri: import.meta.env.VITE_LARAVEL_HOST_GRAPHQL_URL,
//     cache: new InMemoryCache(),
// });

// export default client;

// import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

// export const errorLink = onError(({ graphQLErrors, networkError }) => {
//     if (graphQLErrors)
//         graphQLErrors.forEach(({ message, locations, path }) =>
//             console.log(
//                 `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//             )
//         );
//     if (networkError) console.log(`[Network error]: ${networkError}`);
// });

// export const httpLink = new HttpLink({ uri: import.meta.env.VITE_LARAVEL_GRAPHQL_URL })

// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: from([errorLink, httpLink]),
// });



// ==============================================================
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
    uri: import.meta.env.VITE_LARAVEL_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client

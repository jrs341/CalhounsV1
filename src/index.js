/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from 'core'
import routes from 'router'
const ENV = process.env

/** Redux Integration */
// import configureStore from 'redux/store/configureStore'
// const store = configureStore()

/** Apollo Integration */
// import { ApolloClient} from 'apollo-client'
// import { HttpLink, createHttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'
// import { onError } from "apollo-link-error"
// import { InMemoryCache } from 'apollo-cache-inmemory'
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `${token}` : "",
//     }
//   }
// })

// const httpLink = new HttpLink({
//   uri: ENV.GRAPHQL_URI,
// })

// onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     )

//   if (networkError) console.log(`[Network error]: ${networkError}`)
// })

// const cache = new InMemoryCache()

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: cache,
//   connectToDevTools: true,
// })

// Todo: Make uri and port dynamic with env vars to support stages

ReactDOM.render(
  <Root
  	env={ENV.NODE_ENV}
    routes={routes}
    
  />,
  document.getElementById('root')
)
// client={client}
// store={store}

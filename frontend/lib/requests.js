import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from '../config';
import { ALL_REQUESTS_QUERY } from '../components/RequestList';

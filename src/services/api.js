import { API, graphqlOperation, Storage } from 'aws-amplify'
import * as GraphQLMutation from '../graphql/mutations'
import * as GraphQLQuery from '../graphql/queries'
import lodash from 'lodash';

export const createEvent = async ({
  title,
  description,
  date,
  latitude,
  longitude,
  file,
}) => {
  return API.graphql(graphqlOperation(GraphQLMutation.createEvent, {
    input: {
      title,
      description,
      date,
      latitude,
      longitude,
      file,
    }
  }));
};

export const uploadFile = async ({ file }) => {
  const key = lodash.uniqueId();
  await Storage.put(`${key}`, file);
  return key;
}

export const getEvent = async (id) => {
  const event = await API.graphql(graphqlOperation(GraphQLQuery.getEvent, { id }));
  return event.data.getEvent
}
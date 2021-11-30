import { API, graphqlOperation, Storage } from 'aws-amplify'
import * as GraphQLMutation from '../graphql/mutations'
import * as GraphQLQuery from '../graphql/queries'
import lodash from 'lodash';
import {uuid} from 'uuidv4';

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
  const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
  const key = `${uuid()}.${extension}`;
  const response = await Storage.put(key, file, {
    level: 'public',
  });
  return key;
}

export const getFile = async (key) => {
  return Storage.get(key);
}

export const getEvent = async (id) => {
  const event = await API.graphql(graphqlOperation(GraphQLQuery.getEvent, { id }));
  return event.data.getEvent
}

export const getAllEvents = async () => {
  const events = await API.graphql(graphqlOperation(GraphQLQuery.listEvents, { limit: 100 }));
  return events
}
import { API, graphqlOperation, Storage } from 'aws-amplify'
import * as GraphQLMutation from '../graphql/mutations'
import lodash from 'lodash';

export const createEvent = async ({
  title,
  description,
  date,
  latitude,
  longitude,
  file,
}) => {
  await API.graphql(graphqlOperation(GraphQLMutation.createEvent, {
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
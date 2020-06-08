import * as functions from 'firebase-functions';

export const createFriend = functions
  .region('asia-northeast1')
  .firestore.document('friends/{friendId}')
  .onCreate((snap, context) => {});

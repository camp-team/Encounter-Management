import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const db = admin.firestore();

interface User {
  name: string;
  id: string;
  avatarURL: string;
  createdAt: Date;
  email: string;
}

export const createUser = functions.auth.user().onCreate((user) => {
  const userData: User = {
    id: user.uid,
    name: user.displayName as string,
    avatarURL: user.photoURL as string,
    email: user.email as string,
    createdAt: new Date(),
  };
  return db.doc(`users/${user.uid}`).set(userData);
});

export const deleteUser = functions.auth.user().onDelete((user) => {
  return db.doc(`users/${user.uid}`).delete();
});

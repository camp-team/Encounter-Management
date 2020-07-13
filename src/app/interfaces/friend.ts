import { firestore } from 'firebase';

export interface Friend {
  id: string;
  familyName: string;
  givenName: string;
  nickName: string;
  familyNameKana: string;
  givenNameKana: string;
  age: number;
  gender: 'male' | 'female';
  job: string;
  holiday: string;
  nearestStation: string;
  hobby: string;
  history: string;
  lastday: firestore.Timestamp;
  memo: string;
  birthplace: string;
  createdAt: firestore.Timestamp;
}

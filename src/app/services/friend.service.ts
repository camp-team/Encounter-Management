import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Friend } from '../interfaces/friend';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private db: AngularFirestore) {}

  createFriend(
    friend: Omit<
      Friend,
      'id' // 存在し得ないキーを除外
    >
  ): Promise<void> {
    const id = this.db.createId(); // IDを生成
    return this.db
      .collection('friend')
      .doc(`friends/${id}`)
      .set({
        id, // ドキュメントの内容にIDを持たせる
        ...friend,
        craetedAt: firestore.Timestamp.now(), // firestore形式のタイムスタンプを追加
      });
  }
}

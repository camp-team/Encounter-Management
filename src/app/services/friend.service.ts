import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Friend } from '../interfaces/friend';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private router: Router
  ) {}

  createFriend(friend: Omit<Friend, 'id' | 'createdAt'>): Promise<void> {
    if (this.authService.uid) {
      const id = this.db.createId();
      return this.db
        .doc<Friend>(`users/${this.authService.uid}/friends/${id}`)
        .set({
          id,
          ...friend,
          createdAt: firestore.Timestamp.now(),
        })
        .then(() => {
          this.router.navigateByUrl(`/user-list/${id}`);
        });
    }
  }

  getFriends(uid: string, id: string): Observable<Friend> {
    return this.db
      .doc<Friend>(`users/${this.authService.uid}/friends/${id}`)
      .valueChanges();
  }

  // deleteFriend(friend: Friend): Promise<void> {
  //   return this.db.doc(`friends/${id}`).delete();
  // }

  updateFriend(friend: Friend): Promise<void> {
    return this.db
      .doc<Friend>(`users/${this.authService.uid}/friends/${friend.id}`)
      .update(friend);
  }
}

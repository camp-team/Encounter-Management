import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Friend } from '../interfaces/friend';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
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
          this.snackBar.open('友達情報を追加しました！😋', null, {
            duration: 2000,
          });
          this.router.navigate(['/user-detail'], {
            queryParams: {
              id,
            },
          });
        });
    }
  }

  getFriend(id: string): Observable<Friend> {
    return this.db.doc<Friend>(`friends${id}`).valueChanges();
  }

  getAllFriends(): Observable<Friend[]> {
    if (!this.authService.uid) {
      return of([]);
    }
    return this.db
      .collection<Friend>(`users/${this.authService.uid}/friends`, (ref) =>
        ref.orderBy('createdAt', 'desc')
      )
      .valueChanges();
  }

  // updateFriend(id: string, friend: Friend): Promise<void> {
  //   return this.db.doc<Friend>(`friends/${id}`).update(friend);
  // }

  // deleteFriend(id: string): Promise<void> {
  //   return this.db.doc(`users/${this.authService.uid}/friends/${id}`).delete();
  // }
}

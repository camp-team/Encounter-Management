import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Friend } from '../interfaces/friend';
import { AuthService } from './auth.service';
import { firestore } from 'firebase';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  createFriend(friend: Omit<Friend, 'id' | 'createdAt'>): Promise<void> {
    const id = this.db.createId();
    return this.db
      .doc<Friend>(`users/${this.authService.uid}/friends/${id}`)
      .set({
        id,
        ...friend,
        createdAt: firestore.Timestamp.now(),
      })
      .then(() => {
        this.snackBar.open('友達情報を追加しました。', null, {
          duration: 2000,
        });
        this.router.navigate(['/user-detail'], {
          queryParams: {
            id,
          },
        });
      });
  }

  getFriend(id: string): Observable<Friend> {
    return this.db
      .doc<Friend>(`users/${this.authService.uid}/friends/${id}`)
      .valueChanges();
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

  updateFriend(friend: Friend): Promise<void> {
    return this.db
      .doc(`users/${this.authService.uid}/friends/${friend.id}`)
      .set(friend, {
        merge: true,
      })
      .then(() => {
        this.snackBar.open('友達情報を編集しました。', null, {
          duration: 2000,
        });
        this.router.navigate(['/']);
      });
  }

  deleteFriend(id: string): Promise<void> {
    return this.db
      .doc<Friend>(`users/${this.authService.uid}/friends/${id}`)
      .delete()
      .then(() => {
        this.snackBar.open('友達情報を削除しました。', null, {
          duration: 2000,
        });
        this.router.navigate(['/']);
      });
  }

  async uploadFriendImage(friendId: string, file: File): Promise<string> {
    if (file) {
      const result = await this.storage
        .ref(`users/${this.authService.uid}/friends/${friendId}`)
        .put(file);
      return result.ref.getDownloadURL();
    }
  }
}

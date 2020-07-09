import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Friend } from '../interfaces/friend';
import { AuthService } from './auth.service';
import { firestore } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  createFriend(friend: Omit<Friend, 'id' | 'createdAt'>): Promise<void> {
    const id = this.db.createId();
    console.log(this.authService.uid);
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

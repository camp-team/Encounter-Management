import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserCreate } from './../interfaces/user-create';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  constructor(private db: AngularFirestore, private authService: AuthService) {}

  getFriend(id: string): Observable<UserCreate> {
    return of({
      id: 'xxx',
      familyName: 'まさみ',
      givenName: 'aaa',
      nickName: 'aaa',
      familyNameYomigana: 'aaa',
      givenNameYomigana: 'aaa',
      bday: 1111,
      gender: 'aaa',
      job: 'aaa',
      holiday: 'aaa',
      birthplace: 'aaa',
      nearestStation: 'aaa',
      hobby: 'aaa',
    });
    if (this.authService.uid) {
      return this.db
        .doc<UserCreate>(`users/${this.authService.uid}/friends/${id}`)
        .valueChanges();
    }
  }

  createFriend(friend: Omit<UserCreate, 'id'>): Promise<void> {
    console.log('createFriend走る');
    return;
    if (this.authService.uid) {
      const id = this.db.createId();
      return this.db
        .doc<UserCreate>(`users/${this.authService.uid}/friends/${id}`)
        .set({
          id,
          ...friend,
        });
    }
  }

  updateFriend(friend: UserCreate): Promise<void> {
    console.log('updateFriend走る');
    return;
    if (this.authService.uid) {
      return this.db
        .doc<UserCreate>(`users/${this.authService.uid}/friends/${friend.id}`)
        .update(friend);
    }
  }

  deleteFriend(id: string): Promise<void> {
    if (this.authService.uid) {
      return this.db
        .doc<UserCreate>(`users/${this.authService.uid}/friends/${id}`)
        .delete();
    }
  }
}

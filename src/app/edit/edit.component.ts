import { Component, OnInit } from '@angular/core';
import { Friend } from '../interfaces/friend';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from '../services/friend.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  target: Friend;

  form = this.fb.group({
    familyName: [''],
    givenName: [''],
    nickName: [''],
    familyNameKana: [''],
    givenNameKana: [''],
    gender: ['', [Validators.required, Validators.pattern(/male|female/)]],
    job: [''],
    holiday: [''],
    history: [''],
    birthplace: [''],
    nearestStation: [''],
    hobby: [''],
    lastday: [''],
    memo: [''],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private friendService: FriendService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap((map) => {
          const id = map.get('id');
          if (id) {
            return this.friendService.getFriend(this.authservice.uid, id);
          } else {
            return of(null);
          }
        })
      )
      .subscribe((friend: Friend) => {
        if (friend) {
          this.target = friend;
        }
      });
  }
  submit() {
    if (this.target) {
      const value = this.form.value;
      this.friendService.updateFriend({
        id: this.target.id,
        familyName: value.familyName,
        givenName: value.givenName,
        nickName: value.nickName,
        familyNameKana: value.familyNameKana,
        givenNameKana: value.givenName,
        age: value.age,
        gender: value.gender,
        job: value.job,
        holiday: value.holiday,
        nearestStation: value.nearestStation,
        hobby: value.hobby,
        history: value.history,
        lastday: value.lastday,
        memo: value.memo,
        createdAt: value.firestore.Timestamp,
      });
    } else {
      this.friendService.createFriend(this.form.value);
    }
  }
}

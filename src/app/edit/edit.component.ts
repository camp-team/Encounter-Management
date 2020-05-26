import { environment } from './../../environments/environment';
import { FormBuilder, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { FriendService } from './../services/friend.service';
import { ActivatedRoute } from '@angular/router';
import { UserCreate } from './../interfaces/user-create';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  isDevMode = !environment.production;
  target: UserCreate;
  form = this.fb.group({
    familyName: ['', [Validators.required]],
    givenName: ['', [Validators.required]],
    nickName: ['', [Validators.required]],
    familyNameYomigana: ['', [Validators.required]],
    givenNameYomigana: ['', [Validators.required]],
    bday: [null, [Validators.required]],
    gender: ['', [Validators.required]],
    job: ['', [Validators.required]],
    holiday: ['', [Validators.required]],
    birthplace: ['', [Validators.required]],
    nearestStation: ['', [Validators.required]],
    hobby: ['', [Validators.required]],
  });

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService,
    private fb: FormBuilder
  ) {}

  setDummy() {
    this.form.patchValue({
      familyName: 'aaa',
      givenName: 'aaa',
      nickName: 'aaa',
      familyNameYomigana: 'aaa',
      givenNameYomigana: 'aaa',
      bday: 'aaa',
      gender: 'aaa',
      job: 'aaa',
      holiday: 'aaa',
      birthplace: 'aaa',
      nearestStation: 'aaa',
      hobby: 'aaa',
    });
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap((map) => {
          const id = map.get('id');
          if (id) {
            return this.friendService.getFriend(id);
          } else {
            return of(null);
          }
        })
      )
      .subscribe((friend: UserCreate) => {
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
        familyNameYomigana: value.familyNameYomigana,
        givenNameYomigana: value.givenNameYomigana,
        bday: value.bday,
        gender: value.gender,
        job: value.job,
        holiday: value.holiday,
        birthplace: value.birthplace,
        nearestStation: value.nearestStation,
        hobby: value.hobby,
      });
    } else {
      this.friendService.createFriend(this.form.value);
    }
  }
}

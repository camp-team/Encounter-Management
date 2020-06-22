import { Component, OnInit, HostListener } from '@angular/core';
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
  isComplete: boolean;

  form = this.fb.group({
    familyName: [''],
    givenName: [''],
    nickName: ['', [Validators.required, Validators.maxLength(20)]],
    familyNameKana: [''],
    givenNameKana: [''],
    gender: [''],
    job: [''],
    holiday: [''],
    history: [''],
    birthplace: [''],
    nearestStation: [''],
    hobby: [''],
    lastday: [''],
    memo: ['', [Validators.maxLength(400)]],
  });

  // @HostListener('window:beforeunload', ['$event'])
  // unloadNotification($event: any) {
  //   if (this.form.dirty) {
  //     // この部分でガードすべきかを判断
  //     $event.preventDefault();
  //     $event.returnValue = '作業中の内容が失われますがよろしいですか？';
  //   }
  // }
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private friendService: FriendService,
    private authservice: AuthService
  ) {
    // // クエリーパラメータを使って記事データを取得し、フォームの初期値をセットする
    // this.route.queryParamMap
    //   .pipe(
    //     switchMap((params) => {
    //       return this.friendService.getFriend(params.get('id'));
    //     })
    //   )
    //   .subscribe((target) => {
    //     // フォームに初期値をセット
    //     this.form.setValue(target);
    //   });
  }
  get nickName() {
    return this.form.get('nickName') as FormControl;
  }
  get memo(): FormControl {
    return this.form.get('memo') as FormControl;
  }

  ngOnInit(): void {
    // this.route.queryParamMap
    //   .pipe(
    //     switchMap((map) => {
    //       const id = map.get('id');
    //       if (id) {
    //         return this.friendService.getFriend('id');
    //       } else {
    //         return of(null);
    //       }
    //     })
    //   )
    //   .subscribe((friend: Friend) => {
    //     if (friend) {
    //       this.target = friend;
    //     }
    //   });
  }

  submit() {
    // if (this.target) {
    //   const value = this.form.value;
    //   this.friendService.updateFriend({
    //     id: this.target.id,
    //     familyName: value.familyName,
    //     givenName: value.givenName,
    //     nickName: value.nickName,
    //     familyNameKana: value.familyNameKana,
    //     givenNameKana: value.givenName,
    //     age: value.age,
    //     gender: value.gender,
    //     job: value.job,
    //     holiday: value.holiday,
    //     nearestStation: value.nearestStation,
    //     hobby: value.hobby,
    //     history: value.history,
    //     lastday: value.lastday,
    //     memo: value.memo,
    //     createdAt: value.firestore.Timestamp,
    //   });
    // } else {
    console.log(this.form.value);

    this.friendService.createFriend(this.form.value);
  }
}

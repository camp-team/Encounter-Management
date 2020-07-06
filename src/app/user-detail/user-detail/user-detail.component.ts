import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/interfaces/friend';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  target$: Observable<Friend>;
  // friends = [
  //   {
  //     familyName: '山田',
  //     givenName: '太郎',
  //     nickName: 'やまちゃん',
  //     familyNameKana: 'ヤマダ',
  //     givenNameKana: 'タロウ',
  //     age: 25,
  //     gender: 'male',
  //     job: '野球選手',
  //     holiday: '不定休',
  //     nearestStation: '東京駅',
  //     hobby: 'なし',
  //     history: 'なし',
  //     lastday: '',
  //     memo: '楽しい',
  //   },
  // ];
  constructor() {}

  ngOnInit(): void {}
}

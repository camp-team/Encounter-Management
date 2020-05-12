import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  commentForm = new FormControl('', [Validators.maxLength(400)]);
  usersDetail = [
    {
      name: 'まさみ3000',
      nickName: 'まさみたん',
      birthday: '19870603',
      age: '30',
      job: '女優',
      holiday: '不定休',
      history: 'リリー・フランキー',
      birthplace: '静岡',
      nearestStation: '品川駅',
      hobby: '漫画',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

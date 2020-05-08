import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users = [
    {
      name: 'まさみ3000',
      nickName: 'まさみちゃん',
      birthday: '19870603',
      job: '女優',
    },
    {
      name: '恵子',
      nickName: '恵子ちゃん',
      birthday: '19990909',
      job: 'OL',
    },
    {
      name: '花子',
      nickName: 'トイレ',
      birthday: '19990404',
      job: '幽霊',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

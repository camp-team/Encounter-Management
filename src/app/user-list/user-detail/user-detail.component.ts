import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id: string;

  usersDetail = [
    {
      id: 1,
      familyName: 'Lorem',
      givenName: 'Lorem',
      nickName: 'Lorem',
      familyNameKana: 'Lorem',
      givenNameKana: 'Lorem',
      age: '25',
      gender: '男',
      job: 'Lorem',
      holiday: 'Lorem',
      birthplace: 'Lorem',
      nearestStation: 'Lorem',
      hobby: 'Lorem',
      history: 'Lorem',
      lastday: 'Lorem',
      memo: 'Lorem',
      createdAt: 11111111,
    },
  ];
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((map) => (this.id = map.get('id')));
  }

  ngOnInit(): void {}
}

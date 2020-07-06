import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  target$;
  // users = [
  //   {
  //     name: 'Lorem',
  //     nickName: 'Lorem',
  //     birthday: '1990603',
  //     job: 'Lorem',
  //   },
  //   {
  //     name: 'Lorem',
  //     nickName: 'Lorem',
  //     birthday: '19990909',
  //     job: 'Lorem',
  //   },
  //   {
  //     name: 'Lorem',
  //     nickName: 'Lorem',
  //     birthday: '19990909',
  //     job: 'Lorem',
  //   },
  // ];

  constructor() {}

  ngOnInit(): void {}
}

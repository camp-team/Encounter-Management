import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id: string;
  commentForm = new FormControl('', [Validators.maxLength(400)]);
  usersDetail = [
    {
      name: 'Lorem',
      nickName: 'Lorem',
      birthday: '19990909',
      age: '30',
      job: 'Lorem',
      holiday: 'Lorem',
      history: 'Lorem',
      birthplace: 'Lorem',
      nearestStation: 'Lorem',
      hobby: 'Lorem',
    },
  ];
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((map) => (this.id = map.get('id')));
  }

  ngOnInit(): void {}
}

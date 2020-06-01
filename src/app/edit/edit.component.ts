import { Component, OnInit } from '@angular/core';
import { Friend } from '../interfaces/friend';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from '../services/friend.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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
    private friendService: FriendService
  ) {}

  ngOnInit(): void {}
  submit() {
    this.friendService.createFriend(this.form.value);
  }
}

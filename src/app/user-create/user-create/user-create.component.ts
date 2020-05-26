import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserCreate } from 'src/app/interfaces/user-create';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  userCreate: UserCreate = {
    id: 'xxx',
    familyName: '山田',
    givenName: '太郎',
    nickName: 'やまちゃん',
    familyNameYomigana: 'ヤマダ',
    givenNameYomigana: 'タロウ',
    bday: 1,
    gender: 'string',
    job: 'string',
    holiday: 'string',
    birthplace: 'string',
    nearestStation: 'string',
    hobby: 'string',
  };
  form = this.fb.group({
    familyName: ['', [Validators.required, Validators.maxLength(20)]],
    givenName: ['', [Validators.required, Validators.maxLength(20)]],
    nickName: ['', [Validators.required, Validators.maxLength(20)]],
    familyNameYomigana: ['', [Validators.required, Validators.maxLength(20)]],
    givenNameYomigana: ['', [Validators.required, Validators.maxLength(20)]],
    bday: [''],
    gender: ['', [Validators.required, Validators.pattern(/male|female/)]],
    job: [''],
    holiday: [''],
    birthplace: [''],
    nearestStation: [''],
    hobby: [''],
  });

  get familyNameContorol() {
    return this.form.get('familyName') as FormControl;
  }
  get givenNameContorol() {
    return this.form.get('givenName') as FormControl;
  }
  get familyNameYomiganaContorol() {
    return this.form.get('familyNameYomigana') as FormControl;
  }
  get givenNameYomiganaContorol() {
    return this.form.get('givenNameYomigana') as FormControl;
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {}
  submit() {
    console.log(this.form.value);
  }
}

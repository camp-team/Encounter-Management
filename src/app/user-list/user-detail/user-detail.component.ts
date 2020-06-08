import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { AuthService } from 'src/app/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { Friend } from 'src/app/interfaces/friend';
import { Observable, combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id: string;

  user$: Observable<Friend> = combineLatest([
    this.route.paramMap,
    this.authService.User$,
  ]).pipe(
    switchMap(([map, user]) => {
      if (user) {
        return this.friendService.getFriends(user.id, map.get('id'));
      } else {
        return of(null);
      }
    })
  );

  // usersDetail = [
  //   {
  //     familyName: 'Lorem',
  //     familyNameKana: 'Lorem',
  //     givenName: 'Lorem',
  //     givenNameKana: 'Lorem',
  //     gender: 'Lorem',
  //     lastday: 22222222,
  //     memo: 'Lorem',
  //     nickName: 'Lorem',
  //     birthday: '19990909',
  //     age: '30',
  //     job: 'Lorem',
  //     holiday: 'Lorem',
  //     history: 'Lorem',
  //     birthplace: 'Lorem',
  //     nearestStation: 'Lorem',
  //     hobby: 'Lorem',
  //     createdAt: 2222,
  //   },
  // ];
  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
}

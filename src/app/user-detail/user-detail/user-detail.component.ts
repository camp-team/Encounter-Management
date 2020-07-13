import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/interfaces/friend';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  target$: Observable<Friend>;

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService
  ) {
    this.target$ = this.route.queryParamMap.pipe(
      switchMap((map) => {
        // idパラメータを取得
        const id = map.get('id');
        return this.friendService.getFriend(id);
      })
    );
  }

  ngOnInit(): void {}
}

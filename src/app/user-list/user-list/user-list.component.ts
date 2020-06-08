import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { Friend } from 'src/app/interfaces/friend';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  friends$: Observable<Friend> = this.friendService.getFriends('id', 'uid');

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService
  ) {}

  ngOnInit(): void {
    this.friends$ = this.route.paramMap.pipe(
      switchMap((map) => {
        const id = map.get('id');
        return this.friendService.getFriends('id', 'uid');
      })
    );
  }
}

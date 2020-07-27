import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Friend } from 'src/app/interfaces/friend';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  target$: Observable<Friend[]>;
  imageURL: string | ArrayBuffer;
  friend: Friend;
  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService
  ) {
    this.target$ = this.route.queryParamMap.pipe(
      switchMap((map) => {
        // idパラメータを取得
        const id = map.get('id');
        this.imageURL = this.friend?.friendPhotoURL;
        return this.friendService.getAllFriends();
      })
    );
  }
  ngOnInit(): void {}
}

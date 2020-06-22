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
  // id: string;
  // target$: Observable<Friend[]> = this.route.queryParamMap.pipe(
  //   switchMap((map) => {
  //     this.id = map.get('id');
  //     return this.friendService.getAllFriends();
  //   })
  // );

  constructor() {
    // private friendService: FriendService // private route: ActivatedRoute,
    // this.route.queryParamMap.subscribe((map) => {
    //   console.log(map.get('friendId'));
    // });
  }

  ngOnInit(): void {}
}

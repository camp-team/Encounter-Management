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
  friends$: Observable<Friend[]> = this.friendService.getAllFriends();

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService
  ) {}
  ngOnInit(): void {}
}

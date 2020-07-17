import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/services/friend.service';
import { Friend } from 'src/app/interfaces/friend';

@Component({
  selector: 'app-friend-delete-dialog',
  templateUrl: './friend-delete-dialog.component.html',
  styleUrls: ['./friend-delete-dialog.component.scss'],
})
export class FriendDeleteDialogComponent implements OnInit {
  constructor(private friendService: FriendService) {}
  id: string;
  ngOnInit(): void {}

  deleteFriend() {
    this.friendService.deleteFriend(this.id);
    console.log(this.id);
  }
}

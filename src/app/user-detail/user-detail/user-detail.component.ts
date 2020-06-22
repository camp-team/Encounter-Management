import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendService } from 'src/app/services/friend.service';
import { switchMap, map, switchMapTo } from 'rxjs/operators';
import { Friend } from 'src/app/interfaces/friend';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  id: string;
  target$: Observable<Friend>;

  constructor(
    private route: ActivatedRoute,
    private friendService: FriendService
  ) {
    // クエリーパラメータを使って記事データを取得
    this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.friendService.getFriend(params.get('id'));
      })
    ).subscribe(friend=> {
      // フォームに初期値をセット
      this.form.setValue(friend);
    });
    );
  }

  ngOnInit(): void {}
}

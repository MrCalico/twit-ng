import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [ ],
})
export class FriendsComponent implements OnInit {

  friends = ['Tom','Dick','Harry'];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getFriends().subscribe((Friends)=>this.friends=Friends);
  }

}
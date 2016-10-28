import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [ ],
})
export class FriendsComponent implements OnInit {

  friends = [];

  constructor(private feedService: FeedService) { }


  ngOnInit() {
  
    this.friends = this.feedService.getFriends();
    console.log(this.friends);
  }
}
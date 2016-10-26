import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [ UserService, FeedService ],
  
})
export class FeedComponent implements OnInit {
  tweets = [];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.tweets = this.feedService.getCurrentFeed();
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FeedService } from '../feed.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [ UserService, FeedService ],
  
})
export class FeedComponent implements OnInit {
  tweets = [];
  tweetText = '';

  constructor(private feedService: FeedService, private userService: UserService) { }

  ngOnInit() {
    this.tweets = this.feedService.getCurrentFeed();
  }

OnFavorite(tweet) {
  this.feedService.favoriteTweet(tweet);
}

OnRetweet(tweet) {
  this.feedService.reTweet(tweet);
}

OnNewTweet() {
  console.log(this.tweetText);
  this.feedService.postNewTweet(this.tweetText);
  this.tweetText = '';
} 

}

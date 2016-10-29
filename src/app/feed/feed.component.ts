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
  errorText ='';
  loaded = false;

  constructor(private feedService: FeedService, private userService: UserService) { }

  ngOnInit() {
      this.feedService.getCurrentFeed().subscribe( 
        newTweets => this.tweets = newTweets, 
        err => this.errorText = `Opps: ${err}`,
        () => this.loaded = true
      );
  }

  OnFavorite(tweet) {
    this.feedService.favoriteTweet(tweet);
  }

  OnRetweet(tweet) {
    this.feedService.reTweet(tweet);
  }

  OnNewTweet() {
    console.log(this.tweetText);
    this.feedService.postNewTweet(this.tweetText).subscribe( 
      (newTweet: Tweet) => this.tweets.unshift(newTweet),
      err => this.errorText = `Opps: ${err}`);
    this.tweetText = '';
  } 

}

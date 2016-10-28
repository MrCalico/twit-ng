import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Tweet } from './tweet';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable()
export class FeedService {

  tweets = [];

  constructor(private userService: UserService, private http : Http) {  }

  private getTweetFromJson(obj: Tweet): Tweet {
    return new Tweet(obj.id, obj.body, obj.author, obj.date, obj.retweets, obj.favorites)
  }

  getCurrentFeed() : Observable<Tweet[]> {

    return this.http.get('/api/tweets').map((resp: Response) => {
      console.log("Resp: " + resp.json());
      var fetchedTweets = [];
      for (let tweet of resp.json().data) {
        fetchedTweets.push(this.getTweetFromJson(tweet));
      }
      return (fetchedTweets as Array<Tweet>);
    });


  }

  private isUserInCollection(collection : string[], userId : string) : boolean {

      return collection.indexOf(userId) != -1;

  }

  updateTweet(tweet: Tweet) {
    let jsTweet = JSON.stringify(tweet);
    console.log("Stringified: " + jsTweet);
    let url = `/api/tweets/${tweet.id}`;

    return this.http.put(url, jsTweet).map(
      (resp: Response) => {
        console.log("Sucess. Yay!");
        //console.log(resp.json()); // Null on update
      });
  }

  postNewTweet(tweetText : string) {

    let jsTweet = JSON.stringify({
      body: tweetText, author: this.userService.getCurrentUser(),
      date: new Date(), retweets: [], favorites: []
    });

    return this.http.post('/api/tweets', jsTweet).map(
      (resp: Response) => {
        console.log(resp.json());
        return this.getTweetFromJson(resp.json().data);
      });
  }

  reTweet(tweet : Tweet) {

    if (!this.isUserInCollection(tweet.retweets, this.userService.getCurrentUser())) {
      tweet.retweets.push(this.userService.getCurrentUser());
      this.updateTweet(tweet).subscribe(resp => console.log(resp));
    }

  }

  favoriteTweet(tweet : Tweet) {

    if (!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())) {
      tweet.favorites.push(this.userService.getCurrentUser());
      this.updateTweet(tweet).subscribe(resp => console.log(resp));
    }

  }

  getFriends() : Observable<string[]> {

      return this.http.get('/api/friends').map((resp: Response) => resp.json().data as string[]);
  }
    //return ['Brenda','Connor','Darnell','Jake','Maxwell','Sally','Scott'];

}

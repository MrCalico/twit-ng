import { Injectable } from '@angular/core';
import { Tweet } from './tweet';
import { UserService } from './user.service';

@Injectable()
export class FeedService {

  private tweets = [
        new Tweet(`I like to code as if no one else will have to edit  
          my code.  It's always to valueable and not open source.`,
          'John', new Date(), ['Jake'],  []),

    new Tweet(`Always code as if the guy who ends up maintaining your  
          code will be a violent psychopath who knows where you live.`,
          'Maxwell', new Date(), ['Jake'],  []),

    new Tweet(`Measuring programming progress by lines of code is  
          like measuring aircraft building progress by weight`,
          'Sally', new Date(),  [],  ['Sally'] ),

    new Tweet(`Debugging is twice as hard as writing the code in the 
          first place. Therefore, if you write the code as cleverly 
          as possible, you are, by definition, not smart enough to debug it.`,
           'Scott',  new Date(),  ['Glen'],  ['Mary']),

    new Tweet(`People think that computer science is the art of geniuses but the 
          actual reality is the opposite, just many people doing things that build 
          on each other, like a wall of mini stones`,
          'Darnell',  new Date(),  ['Joe', 'Mary'],  [] ),

    new Tweet(`You can’t have great software without a great team, and most 
          software teams behave like dysfunctional families.`,
          'Brenda',  new Date(),  [],  ['Mary', 'Glen'] ),
  ]


  constructor(private userService: UserService) { 

  }

  getCurrentFeed() : Array<Tweet> {

    return this.tweets;


  }

  private isUserInCollection(collection : string[], userId : string) : boolean {

      return collection.indexOf(userId) != -1;

  }

  postNewTweet(tweetText : string) {
    this.tweets.unshift(
          new Tweet(tweetText, this.userService.getCurrentUser(), new Date(), [], []) 
       );
  }

  reTweet(tweet : Tweet) {

    if (!this.isUserInCollection(tweet.retweets, this.userService.getCurrentUser())) {
      tweet.retweets.push(this.userService.getCurrentUser());
    }

  }

  favoriteTweet(tweet : Tweet) {

    if (!this.isUserInCollection(tweet.favorites, this.userService.getCurrentUser())) {
      tweet.favorites.push(this.userService.getCurrentUser());
    }

  }

}

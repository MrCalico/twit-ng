import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

 friendId: string = 'Julio';

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.map(params => params['friendId']).subscribe((friendId) => {
      this.friendId = friendId;
      console.log(friendId);
    });
    /*
    console.log(this.route.params);
    this.route.params.forEach((params: Params) => {
      this.friendId = params['friendId'];
      console.log("f> " + this.friendId);
    })
    */
  }

}

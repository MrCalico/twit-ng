import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';

import { UserService } from './user.service';
import { FeedService } from './feed.service';

import { AppRoutingModule } from './app.routing';
import { FriendComponent } from './friend/friend.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockDatabaseService } from './mock.database.service';

//import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    MessagesComponent,
    FriendsComponent,
    FriendComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(MockDatabaseService, { delay: 100, rootPath: 'api/'}),
  ],
  providers: [FeedService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

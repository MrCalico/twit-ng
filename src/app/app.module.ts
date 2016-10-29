import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';

//import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    MessagesComponent,
    FriendsComponent,
    FriendComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(MockDatabaseService, { delay: 3100, rootPath: 'api/'}),
  ],
  providers: [FeedService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

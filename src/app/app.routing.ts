import { NgModule } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friend/friend.component';
import { MessagesComponent } from './messages/messages.component';

const appRoutes: Routes = [
    { path:'', redirectTo: '/feed', pathMatch: 'full' },
    { path:'feed', component: FeedComponent },
    { path:'messages', component: MessagesComponent },
    { path:'friends', component: FriendsComponent },
    { path:'friends/:friendId', component: FriendComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}

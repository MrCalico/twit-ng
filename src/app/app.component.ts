import { Component } from '@angular/core';
import { FeedComponent } from './feed/feed.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'This App Really Works!';
  description = 'This is the greatest app in the world!'
}

import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {routeAnimation} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [routeAnimation]
})


export class AppComponent {
  title = 'app';
}

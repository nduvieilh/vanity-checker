import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vanity Checker';
  navLinks = [
    {path: '/plate-search', label: 'Plate Search'},
    {path: '/contact', label: 'Contact'}
  ]
}

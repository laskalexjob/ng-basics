import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic title';
  imgDefault =
    'https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png';
  imgReact = this.imgDefault;
  imgAngular =
    'https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png';

  constructor() {
    setTimeout(() => {
      this.imgReact = this.imgDefault;
    }, 3000);
  }
}

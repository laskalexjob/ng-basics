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
  inputVal = '';
  toggleSwitcher: boolean = false;

  toggleSwith() {
    this.toggleSwitcher = !this.toggleSwitcher;
  }
  constructor() {
    setTimeout(() => {
      this.imgReact = this.imgAngular;
    }, 3000);
  }

  onBlur(str) {
    this.inputVal = str;
  }

  onInput(event) {
    console.log('Event', event);
    this.inputVal = event.target.value;
  }
}

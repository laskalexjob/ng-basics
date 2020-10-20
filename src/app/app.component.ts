import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggleSwitcher: any = true;

  toggleSwith() {
    this.toggleSwitcher = !this.toggleSwitcher;
  }
}

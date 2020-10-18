import { Component } from '@angular/core';

export interface Card{
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggle = true;

  cards: Card[] = [
    {title: 'Card 1', text: 'First card text'},
    {title: 'Card number two', text: 'Second card text'},
    {title: 'Last card', text: 'Third card text'}
  ]

  toggleCards(){
    this.toggle = !this.toggle;
  }
}

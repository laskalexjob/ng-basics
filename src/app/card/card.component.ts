import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  
  @Input() card: Card;
  @Input() index: number;

  textColor = 'black';
  title: string = 'Card title!';
  text: string = 'My text!';
  disabled = false;

  getInfo(): string {
    return 'This is some info';
  }

  inputHandler(value){
    this.card.title = value;
    console.log(value);
  }

  changeTitleHandler(){
    this.card.title = 'Changed title';
  }

  ngOnInit(): void {
    console.log('from card');
    
  }
}

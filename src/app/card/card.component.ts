import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  
  textColor = 'black';
  title: string = 'Card title!';
  text: string = 'My text!';
  disabled = false;

  getInfo(): string {
    return 'This is some info';
  }

  inputHandler(value){
    this.title = value;
    console.log(value);
  }

  changeTitleHandler(){
    this.title = 'Changed title';
  }

  ngOnInit(): void {
    console.log('from card');
    
  }
}

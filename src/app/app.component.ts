import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'I want to learn angular components',
      text: "I'm still learning",
      id: 1,
    },
    {
      title: 'I also want to learn Core',
      text: 'I am stiil do this too',
      id: 2,
    },
  ];
}

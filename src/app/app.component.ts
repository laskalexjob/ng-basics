import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  arr: number[] = [1, 2, 3, 4, 5, 6, 7];

  objs = [
    {
      title: 'Post1',
      author: 'Alex',
      comments: [
        { name: 'post1', text: 'some' },
        { name: 'post1', text: 'some' },
        { name: 'post1', text: 'some' },
      ],
    },
    {
      title: 'Post2',
      author: 'Alex 2',
      comments: [
        { name: 'post2', text: 'some 2' },
        { name: 'post2', text: 'some 2' },
        { name: 'post2', text: 'some 2' },
      ],
    },
  ];
}

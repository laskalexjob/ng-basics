import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  search = ''
  searchField = 'title'

  posts: Post[] = [
    { title: 'Beer', text: 'The best beer int the world' },
    { title: 'Milk', text: 'Milk makes your skin flat' },
    { title: 'Water', text: 'Just water drink it' },
    { title: 'Klim', text: 'asdfasdfasdfsd' },
  ]

}

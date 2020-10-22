import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchField: string): Post[] {
    if (!search.trim()) {
      return posts
    }
    const lowerCaseSearch: string = search.toLowerCase()
    return posts.filter(p => p[searchField].toLowerCase().includes(lowerCaseSearch))
  }

}

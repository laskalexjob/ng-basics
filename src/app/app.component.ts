import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  date: Date

  ngOnInit(): void {
    this.obs$.subscribe(date => {
      this.date = date
    })
  }

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise Resolved')
    }, 4000);
  })
  obs$: Observable<Date> = new Observable<Date>(observer => {
    setInterval(() => {
      observer.next(new Date())
    }, 1000)
  }
  )


}

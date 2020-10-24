import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LocalCounterService {

  counter = 0

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }
}

import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class AppCounterService {
    counter = 0

    increment() {
        this.counter++
    }

    decrement() {
        this.counter--
    }
}
import { LogService } from './log.service';
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class AppCounterService {
    constructor(private logService: LogService) { }
    counter = 0

    increment() {
        this.counter++
        this.logService.log(this.counter)
    }

    decrement() {
        this.counter--
        this.logService.log(this.counter)
    }
}
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Minsk', Validators.required)
      }
      )
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form);
      const values = { ...this.form.value }
      console.log(values);
    }
  }
}


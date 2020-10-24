import { MyValidators } from './my.validators';
import { Component, OnInit } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'

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
        Validators.required,
        MyValidators.restrictedEmail
      ], MyValidators.uniqueEmail),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Minsk', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted', this.form);
      const values = { ...this.form.value }
      console.log(values);
    }
  }
  D
  setCapital() {
    const cityMap = {
      ru: 'Moscow',
      by: 'Minsk',
      ua: 'Kiev'
    }

    const cityKey = this.form.get('address').get('country').value
    const city = cityMap[cityKey]
    console.log(city);

    this.form.patchValue({ address: { city } })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);

  }
}


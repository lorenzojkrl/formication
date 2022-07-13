import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  reactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    age: new FormControl('', [
      Validators.required,
      Validators.max(99),
      Validators.min(18),
    ]),
  });

  onSubmit() {
    console.log('form: ', this.reactiveForm);
  }
}

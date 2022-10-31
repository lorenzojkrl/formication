import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  reactiveForm = new UntypedFormGroup({
    name: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl(''),
    age: new UntypedFormControl('', [
      Validators.required,
      Validators.max(99),
      Validators.min(18),
    ]),
  });

  onSubmit() {
    console.log('form: ', this.reactiveForm);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  name: string | undefined;
  email: string | undefined;
  age: number | undefined;
  preference: string | undefined;
  preferences: string[] = ['Cooking', 'Reading', 'Coding'];

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  onSubmit() {
    alert('thank you for submitting this form');
    // Add your form submission logic here
  }
  clearForm(form) {
    form.resetForm();
  }
  onbacktohome(){
    window.location.href='http://localhost:4200/';
  }

  ngOnInit(): void {
  }

}

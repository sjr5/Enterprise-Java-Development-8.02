import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contextForm: FormGroup
  nameInput: FormControl
  emailInput: FormControl
  occupationInput: FormControl
  subjcetInput: FormControl
  contentInput: FormControl
  constructor(){
    this.nameInput = new FormControl("", Validators.required)
    this.emailInput = new FormControl("", [Validators.required, Validators.email])
    this.subjcetInput= new FormControl("", Validators.required)
    this.occupationInput = new FormControl("")
    this.contentInput = new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(255)])
    this.contextForm = new FormGroup({
      name: this.nameInput,
      occupation: this.occupationInput,
      email:this.emailInput,
      subjcet :this.subjcetInput,
      content: this.contentInput
    })
  }
  onSubmit(){
    alert("Contact form submitted Successfully!")
    this.contextForm.reset()
  }
}
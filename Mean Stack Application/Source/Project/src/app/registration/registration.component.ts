import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  email: string = '';
  password: string = '';
  reEnterPassword: string = '';
  fn: string = '';
  ln: string = '';

  constructor(private api_srvc: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          'fn': [null, Validators.required],
          'ln': [null, Validators.required],
          'email': [null, Validators.required],
          'password': [null, Validators.required],
          'reEnterPassword': [null, Validators.required]
      });
  }

  onFormSubmit(form: NgForm) {
      console.log('in registration', form);
    this.api_srvc.postAccount(form)
      .subscribe(res => {
        this.router.navigate(['/cheatsheet']);
      }, (err) => {

        console.log(err);
      });
  }
}

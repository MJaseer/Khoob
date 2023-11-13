import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  })
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }


  login() {
    throw new Error('Method not implemented.');
  }

}

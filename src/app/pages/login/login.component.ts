import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private router:Router){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public onSubmit() {
    let userName = this.loginForm.get('username')!.value;
    let password = this.loginForm!.get('password')!.value;
    if (userName === 'admin' && password === 'admin') {

      localStorage.setItem('userType', 'admin')
      this.router.navigate(["admin/products"])

    } else if (userName === 'user' && password === 'user') {

      localStorage.setItem('userType', 'user')
      this.router.navigate(["user/products"])

    } else {

      console.log('not user!!')
      
    }
  }

}

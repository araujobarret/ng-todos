import { NgModule, Component, Pipe, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup;
  login: FormControl;
  password: FormControl;

  constructor(private auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.login = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
      Validators.pattern(/[a-z0-9._]+@[a-z0-9]+\.[a-z0-9]+(\.*[a-z0-9]*)/)
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]);
    this.loginForm = new FormGroup({
      login: this.login,
      password: this.password
    });

    this.auth.isAuthenticated()
      .then(res => this._router.navigate(['/dashboard']))
      .catch(e => console.log('user not authenticated yet.', e));
  }

  onSubmit() : Promise<any> {
    return new Promise ((resolve, reject) => {
      if(this.loginForm.invalid || this.isLoading) { reject('Invalid form fields'); }
      this.isLoading = true;
      this.auth.authenticate({ email: this.loginForm.controls.login.value, password: this.loginForm.controls.password.value })
        .then(res => {
          this._router.navigate(['/dashboard']);
          resolve('Authenticated');
        })
        .catch(e => {
          console.log('error', e);
          this.isLoading = false;
          reject('Authentication error');
        });
    });
  }

}

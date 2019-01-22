import { NgModule, Component, Pipe, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
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

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.login = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40),
      Validators.pattern("[a-z0-9._]+@[a-z0-9]+\.[a-z0-9]+(\.*[a-z0-9]*)")
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
  }

  onSubmit() {
    console.log('form', this.loginForm);
    if(this.loginForm.invalid || this.isLoading) { return false; }
    console.log('not loading');
    this.isLoading = true;
    this.auth.authenticate({ email: this.loginForm.controls.login.value, password: this.loginForm.controls.password.value })
      .then(res => console.log('res', res))
      .catch(e => console.log('error', e));
  }

}

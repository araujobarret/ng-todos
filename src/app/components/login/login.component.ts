import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  isLoading: boolean = false;

  constructor(private auth: AuthService) { }

  onSubmit(form) {
    if(form.invalid || this.isLoading) { return false; }
    console.log('not loading');
    this.isLoading = true;
    this.auth.authenticate({ email: form.controls.login.value, password: form.controls.password.value })
      .then(res => console.log('res', res))
      .catch(e => console.log('error', e));
  }

}

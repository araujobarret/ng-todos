import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoading: boolean = false;
  constructor(private http: HttpClient) { }

  onSubmit(form) {
    if(form.invalid || this.isLoading) { return false; }
    this.isLoading = true;
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe(
        (res: any) => {
          console.log('res', res);
        },
        (error) => {
          console.log('error', error);
        }
      );
  }

}

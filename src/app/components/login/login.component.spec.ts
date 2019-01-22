import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { LoginComponent } from './login.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AuthService } from '../../services/auth/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        HttpClientModule,
        RouterTestingModule,
        StorageServiceModule
      ],
      declarations: [ LoginComponent ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the form should be invalid with invalids entries', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('the login field should return false with invalid entries', () => {
    component.loginForm.controls.login.setValue('logindummy');
    expect(component.loginForm.controls.login.valid).toBeFalsy();
    component.loginForm.controls.login.setValue('logindummy@');
    expect(component.loginForm.controls.login.valid).toBeFalsy();
    component.loginForm.controls.login.setValue('logindummy@mail');
    expect(component.loginForm.controls.login.valid).toBeFalsy();
  })

  it('the password field should return false with invalid entries', () => {
    component.loginForm.controls.password.setValue('123');
    expect(component.loginForm.controls.password.valid).toBeFalsy();
    component.loginForm.controls.password.setValue('12312312301231231230123');
    expect(component.loginForm.controls.password.valid).toBeFalsy();
  })

  it('the form and each field should be valid with the right values', () => {
    component.loginForm.controls.login.setValue('test5@mail.com');
    component.loginForm.controls.password.setValue('123123123');
    expect(component.loginForm.controls.login.valid).toBeTruthy();
    expect(component.loginForm.controls.login.valid).toBeTruthy();
    expect(component.loginForm.valid).toBeTruthy();
  })

  it('the form should be submitted correctly', async () => {
    component.loginForm.controls.login.setValue('test5@mail.com');
    component.loginForm.controls.password.setValue('123123123');
    const res = await component.onSubmit();
    expect(res).toBe('Authenticated');
    console.log('res', res)
  })
});

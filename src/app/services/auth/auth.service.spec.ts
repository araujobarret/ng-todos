import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let token = '123123123';

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, RouterTestingModule, StorageServiceModule ],
    providers: [ AuthService, LocalStorageService ]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should resolve(false) with an invalid token on isTokenExpired method', async () => {
    const service: AuthService = TestBed.get(AuthService);
    const res = await service.isTokenExpired(token);
    expect(res).toBeFalsy();
  }, 30000)

  it('should resolve(false) authenticate method with the wrong credentials', async () => {
    const service: AuthService = TestBed.get(AuthService);
    const res = await service.authenticate({ email: 'lala@mail.com', password: '11111111' });
    expect(res.success).toBeFalsy();
  })

  it('should resolve(true) authenticate method with the correct credentials', async () => {
    const service: AuthService = TestBed.get(AuthService);
    const res = await service.authenticate({ email: 'test5@mail.com', password: '123123123' });
    token = res.token;
    expect(res.success).toBeTruthy();
  })

  it('should resolve(true) authenticate method with the correct credentials', async () => {
    const service: AuthService = TestBed.get(AuthService);
    const res = await service.isTokenExpired(token);
    expect(res).toBeTruthy();
  })
});

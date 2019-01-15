import { TestBed, inject } from '@angular/core/testing';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService, TODO_SERVICE_STORAGE } from './local-storage.service';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StorageServiceModule],
    providers: [LocalStorageService]
  }));

  it('should be created', () => {
    const service: LocalStorageService = TestBed.get(LocalStorageService);
    expect(service).toBeTruthy();
  });

  it('should have no token stored after a safe delete', inject([LocalStorageService], (service: LocalStorageService) => {
    service.deleteToken();
    expect(service.getToken()).not.toBeDefined();
  }));

  it('should store the token correctly', inject([LocalStorageService], (service: LocalStorageService) => {
    expect(service.setToken('123')).toBeTruthy();
  }));
});

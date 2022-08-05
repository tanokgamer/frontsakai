import { TestBed } from '@angular/core/testing';

import { UploadClientService } from './upload-client.service';

describe('UploadClientService', () => {
  let service: UploadClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { UploadsService } from './uploads.service';

describe('UploadsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadsService]
    });
  });

  it('should ...', inject([UploadsService], (service: UploadsService) => {
    expect(service).toBeTruthy();
  }));
});

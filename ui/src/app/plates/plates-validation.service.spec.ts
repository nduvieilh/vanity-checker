import { TestBed } from '@angular/core/testing';

import { PlatesValidationService } from './plates-validation.service';

describe('PlatesValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatesValidationService = TestBed.get(PlatesValidationService);
    expect(service).toBeTruthy();
  });
});

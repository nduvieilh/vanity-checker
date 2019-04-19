import { TestBed } from '@angular/core/testing';

import { PlatesConfigService } from './plates-config.service';

describe('PlatesConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatesConfigService = TestBed.get(PlatesConfigService);
    expect(service).toBeTruthy();
  });
});

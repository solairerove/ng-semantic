import { TestBed } from '@angular/core/testing';

import { NgSemanticService } from './ng-semantic.service';

describe('NgSemanticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgSemanticService = TestBed.get(NgSemanticService);
    expect(service).toBeTruthy();
  });
});

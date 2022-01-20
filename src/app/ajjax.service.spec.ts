import { TestBed } from '@angular/core/testing';

import { AjjaxService } from './ajjax.service';

describe('AjjaxService', () => {
  let service: AjjaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjjaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

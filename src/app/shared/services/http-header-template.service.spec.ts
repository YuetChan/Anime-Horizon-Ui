import { TestBed } from '@angular/core/testing';

import { HttpHeaderTemplateService } from './http-header-template.service';

describe('HttpHeaderTemplateService', () => {
  let service: HttpHeaderTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHeaderTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

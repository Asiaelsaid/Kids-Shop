import { TestBed } from '@angular/core/testing';

import { ProducteWithApiService } from './producte-with-api.service';

describe('ProducteWithApiService', () => {
  let service: ProducteWithApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducteWithApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

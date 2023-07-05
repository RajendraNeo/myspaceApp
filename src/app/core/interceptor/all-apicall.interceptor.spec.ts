import { TestBed } from '@angular/core/testing';

import { AllApicallInterceptor } from './all-apicall.interceptor';

describe('AllApicallInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AllApicallInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AllApicallInterceptor = TestBed.inject(AllApicallInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

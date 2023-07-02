import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackgesActivationComponent } from './packges-activation.component';

describe('PackgesActivationComponent', () => {
  let component: PackgesActivationComponent;
  let fixture: ComponentFixture<PackgesActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackgesActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackgesActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

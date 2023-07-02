import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientuserdashboardComponent } from './clientuserdashboard.component';

describe('ClientuserdashboardComponent', () => {
  let component: ClientuserdashboardComponent;
  let fixture: ComponentFixture<ClientuserdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientuserdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientuserdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

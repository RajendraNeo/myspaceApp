import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientadmindashboardComponent } from './clientadmindashboard.component';

describe('ClientadmindashboardComponent', () => {
  let component: ClientadmindashboardComponent;
  let fixture: ComponentFixture<ClientadmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientadmindashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientadmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

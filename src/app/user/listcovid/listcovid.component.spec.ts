import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcovidComponent } from './listcovid.component';

describe('ListcovidComponent', () => {
  let component: ListcovidComponent;
  let fixture: ComponentFixture<ListcovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

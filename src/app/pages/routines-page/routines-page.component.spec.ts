import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesPageComponent } from './routines-page.component';

describe('RoutinesPageComponent', () => {
  let component: RoutinesPageComponent;
  let fixture: ComponentFixture<RoutinesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

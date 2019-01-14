import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsFooterComponent } from './lists-footer.component';

describe('ListsFooterComponent', () => {
  let component: ListsFooterComponent;
  let fixture: ComponentFixture<ListsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListsFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

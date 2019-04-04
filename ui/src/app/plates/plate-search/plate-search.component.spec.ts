import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateSearchComponent } from './plate-search.component';

describe('PlateSearchComponent', () => {
  let component: PlateSearchComponent;
  let fixture: ComponentFixture<PlateSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlateSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlateSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

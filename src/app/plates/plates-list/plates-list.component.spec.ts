import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatesListComponent } from './plates-list.component';

describe('PlatesListComponent', () => {
  let component: PlatesListComponent;
  let fixture: ComponentFixture<PlatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

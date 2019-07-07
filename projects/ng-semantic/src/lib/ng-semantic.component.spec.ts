import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSemanticComponent } from './ng-semantic.component';

describe('NgSemanticComponent', () => {
  let component: NgSemanticComponent;
  let fixture: ComponentFixture<NgSemanticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSemanticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSemanticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

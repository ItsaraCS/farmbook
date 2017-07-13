import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlansComponent } from './new-plans.component';

describe('NewPlansComponent', () => {
  let component: NewPlansComponent;
  let fixture: ComponentFixture<NewPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFarmComponent } from './create-farm.component';

describe('CreateFarmComponent', () => {
  let component: CreateFarmComponent;
  let fixture: ComponentFixture<CreateFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

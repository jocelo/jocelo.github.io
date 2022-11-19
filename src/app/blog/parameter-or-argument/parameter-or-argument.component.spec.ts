import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterOrArgumentComponent } from './parameter-or-argument.component';

describe('ParameterOrArgumentComponent', () => {
  let component: ParameterOrArgumentComponent;
  let fixture: ComponentFixture<ParameterOrArgumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterOrArgumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterOrArgumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

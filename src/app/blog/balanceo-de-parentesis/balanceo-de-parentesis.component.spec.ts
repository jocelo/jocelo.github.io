import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BalanceoDeParentesisComponent } from './balanceo-de-parentesis.component';

describe('BalanceoDeParentesisComponent', () => {
  let component: BalanceoDeParentesisComponent;
  let fixture: ComponentFixture<BalanceoDeParentesisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceoDeParentesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceoDeParentesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

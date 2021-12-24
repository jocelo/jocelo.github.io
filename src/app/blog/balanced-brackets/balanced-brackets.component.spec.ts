import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BalancedBracketsComponent } from './balanced-brackets.component';

describe('BalancedBracketsComponent', () => {
  let component: BalancedBracketsComponent;
  let fixture: ComponentFixture<BalancedBracketsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancedBracketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancedBracketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

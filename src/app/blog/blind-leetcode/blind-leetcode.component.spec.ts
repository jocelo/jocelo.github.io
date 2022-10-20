import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindLeetcodeComponent } from './blind-leetcode.component';

describe('BlindLeetcodeComponent', () => {
  let component: BlindLeetcodeComponent;
  let fixture: ComponentFixture<BlindLeetcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlindLeetcodeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindLeetcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fail', () => {
    expect(1).toBe(2);
  });
});

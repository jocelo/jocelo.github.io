import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainsDuplicateComponent } from './contains-duplicate.component';

describe('ContainsDuplicateComponent', () => {
  let component: ContainsDuplicateComponent;
  let fixture: ComponentFixture<ContainsDuplicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainsDuplicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainsDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

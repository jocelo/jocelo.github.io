import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainsDuplicateEsComponent } from './contains-duplicate-es.component';

describe('ContainsDuplicateEsComponent', () => {
  let component: ContainsDuplicateEsComponent;
  let fixture: ComponentFixture<ContainsDuplicateEsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainsDuplicateEsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainsDuplicateEsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

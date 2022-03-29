import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWholeLineVsCodeComponent } from './delete-whole-line-vs-code.component';

describe('DeleteWholeLineVsCodeComponent', () => {
  let component: DeleteWholeLineVsCodeComponent;
  let fixture: ComponentFixture<DeleteWholeLineVsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWholeLineVsCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWholeLineVsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarLineasVsCodeComponent } from './borrar-lineas-vs-code.component';

describe('BorrarLineasVsCodeComponent', () => {
  let component: BorrarLineasVsCodeComponent;
  let fixture: ComponentFixture<BorrarLineasVsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarLineasVsCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarLineasVsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsUnaPilaComponent } from './que-es-una-pila.component';

describe('QueEsUnaPilaComponent', () => {
  let component: QueEsUnaPilaComponent;
  let fixture: ComponentFixture<QueEsUnaPilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueEsUnaPilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEsUnaPilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

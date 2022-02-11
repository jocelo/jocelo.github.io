import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueEsUnaColaComponent } from './que-es-una-cola.component';

describe('QueEsUnaColaComponent', () => {
  let component: QueEsUnaColaComponent;
  let fixture: ComponentFixture<QueEsUnaColaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueEsUnaColaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueEsUnaColaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaDosNumerosComponent } from './suma-dos-numeros.component';

describe('SumaDosNumerosComponent', () => {
  let component: SumaDosNumerosComponent;
  let fixture: ComponentFixture<SumaDosNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaDosNumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumaDosNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

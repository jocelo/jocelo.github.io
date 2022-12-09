import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametroOArgumentoComponent } from './parametro-o-argumento.component';

describe('ParametroOArgumentoComponent', () => {
  let component: ParametroOArgumentoComponent;
  let fixture: ComponentFixture<ParametroOArgumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametroOArgumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametroOArgumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

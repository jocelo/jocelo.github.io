import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoformatoArchivosComponent } from './autoformato-archivos.component';

describe('AutoformatoArchivosComponent', () => {
  let component: AutoformatoArchivosComponent;
  let fixture: ComponentFixture<AutoformatoArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoformatoArchivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoformatoArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

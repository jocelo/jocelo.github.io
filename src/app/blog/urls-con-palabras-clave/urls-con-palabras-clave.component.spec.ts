import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsConPalabrasClaveComponent } from './urls-con-palabras-clave.component';

describe('UrlsConPalabrasClaveComponent', () => {
  let component: UrlsConPalabrasClaveComponent;
  let fixture: ComponentFixture<UrlsConPalabrasClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlsConPalabrasClaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlsConPalabrasClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

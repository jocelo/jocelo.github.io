import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirVscodeDesdeTerminalComponent } from './abrir-vscode-desde-terminal.component';

describe('AbrirVscodeDesdeTerminalComponent', () => {
  let component: AbrirVscodeDesdeTerminalComponent;
  let fixture: ComponentFixture<AbrirVscodeDesdeTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbrirVscodeDesdeTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbrirVscodeDesdeTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

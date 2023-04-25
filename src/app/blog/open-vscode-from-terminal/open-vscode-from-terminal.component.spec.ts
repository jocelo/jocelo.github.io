import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenVscodeFromTerminalComponent } from './open-vscode-from-terminal.component';

describe('OpenVscodeFromTerminalComponent', () => {
  let component: OpenVscodeFromTerminalComponent;
  let fixture: ComponentFixture<OpenVscodeFromTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenVscodeFromTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenVscodeFromTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

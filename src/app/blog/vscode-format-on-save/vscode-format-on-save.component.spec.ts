import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VscodeFormatOnSaveComponent } from './vscode-format-on-save.component';

describe('VscodeFormatOnSaveComponent', () => {
  let component: VscodeFormatOnSaveComponent;
  let fixture: ComponentFixture<VscodeFormatOnSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VscodeFormatOnSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VscodeFormatOnSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

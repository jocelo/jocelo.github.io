import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAStackComponent } from './what-is-a-stack.component';

describe('WhatIsAStackComponent', () => {
  let component: WhatIsAStackComponent;
  let fixture: ComponentFixture<WhatIsAStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsAStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsAStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

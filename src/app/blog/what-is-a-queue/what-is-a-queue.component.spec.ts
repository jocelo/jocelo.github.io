import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAQueueComponent } from './what-is-a-queue.component';

describe('WhatIsAQueueComponent', () => {
  let component: WhatIsAQueueComponent;
  let fixture: ComponentFixture<WhatIsAQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsAQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsAQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

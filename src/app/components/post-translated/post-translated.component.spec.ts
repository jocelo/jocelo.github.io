import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTranslatedComponent } from './post-translated.component';

describe('PostTranslatedComponent', () => {
  let component: PostTranslatedComponent;
  let fixture: ComponentFixture<PostTranslatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTranslatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTranslatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

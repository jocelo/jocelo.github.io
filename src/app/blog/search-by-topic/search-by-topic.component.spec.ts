import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTopicComponent } from './search-by-topic.component';

describe('SearchByTopicComponent', () => {
  let component: SearchByTopicComponent;
  let fixture: ComponentFixture<SearchByTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

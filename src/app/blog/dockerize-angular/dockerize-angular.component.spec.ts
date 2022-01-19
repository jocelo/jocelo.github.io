import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerizeAngularComponent } from './dockerize-angular.component';

describe('DockerizeAngularComponent', () => {
  let component: DockerizeAngularComponent;
  let fixture: ComponentFixture<DockerizeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerizeAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerizeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

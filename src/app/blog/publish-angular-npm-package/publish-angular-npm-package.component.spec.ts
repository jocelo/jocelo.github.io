import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAngularNpmPackageComponent } from './publish-angular-npm-package.component';

describe('PublishAngularNpmPackageComponent', () => {
  let component: PublishAngularNpmPackageComponent;
  let fixture: ComponentFixture<PublishAngularNpmPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishAngularNpmPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishAngularNpmPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

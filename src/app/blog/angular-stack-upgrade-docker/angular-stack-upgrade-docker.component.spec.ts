import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStackUpgradeDockerComponent } from './angular-stack-upgrade-docker.component';

describe('AngularStackUpgradeDockerComponent', () => {
  let component: AngularStackUpgradeDockerComponent;
  let fixture: ComponentFixture<AngularStackUpgradeDockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularStackUpgradeDockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularStackUpgradeDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

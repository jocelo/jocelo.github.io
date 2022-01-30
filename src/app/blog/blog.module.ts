import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularStackUpgradeDockerComponent } from './angular-stack-upgrade-docker/angular-stack-upgrade-docker.component';
import { BalancedBracketsComponent } from './balanced-brackets/balanced-brackets.component';
import { BalanceoDeParentesisComponent } from './balanceo-de-parentesis/balanceo-de-parentesis.component';

import { CodeBlockModule } from '../code-block/code-block.module';
import { ChipsModule } from '../chips/chips.module';
import { DockerizeAngularComponent } from './dockerize-angular/dockerize-angular.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { HighlightDirective } from '../highlight.directive';

const blogRoutes: Routes = [
  { path: 'blog/', redirectTo: '/', pathMatch: 'full' },
  { path: 'index', redirectTo: '/' },
  { path: 'blog/balanced-brackets', component: BalancedBracketsComponent },
  { path: 'blog/balanceo-de-parentesis', component: BalanceoDeParentesisComponent },
  { path: 'blog/dockerize-angular', component: DockerizeAngularComponent }
];

@NgModule({
  declarations: [
    AngularStackUpgradeDockerComponent,
    BalancedBracketsComponent,
    BalanceoDeParentesisComponent,
    DockerizeAngularComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    CodeBlockModule,
    ChipsModule,
    FontAwesomeModule,
    MatTabsModule,
    MatChipsModule,
    RouterModule.forRoot(
      blogRoutes,
      { enableTracing: true, relativeLinkResolution: 'legacy' }
    )
  ]
})
export class BlogModule { }

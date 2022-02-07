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
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { HighlightDirective } from '../highlight.directive';
import { SearchByTopicComponent } from './search-by-topic/search-by-topic.component';


const blogRoutes: Routes = [
  { path: 'blog/', redirectTo: '/', pathMatch: 'full' },
  { path: 'index', redirectTo: '/' },
  { path: 'blog/topic/:token', component: SearchByTopicComponent },
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
    SearchByTopicComponent,
  ],
  imports: [
    CommonModule,
    CodeBlockModule,
    ChipsModule,
    FontAwesomeModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatCardModule,
    RouterModule.forRoot(
      blogRoutes,
      {
        enableTracing: true,
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        relativeLinkResolution: 'legacy'
      }
    )
  ]
})
export class BlogModule { }

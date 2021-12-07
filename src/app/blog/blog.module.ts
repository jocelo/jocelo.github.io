import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularStackUpgradeDockerComponent } from './angular-stack-upgrade-docker/angular-stack-upgrade-docker.component';
import { BalancedBracketsComponent } from './balanced-brackets/balanced-brackets.component';
import { BalanceoDeParentesisComponent } from './balanceo-de-parentesis/balanceo-de-parentesis.component';

import { CodeBlockModule } from '../code-block/code-block.module';

const blogRoutes: Routes = [
  { path: 'blog/', redirectTo: '/', pathMatch: 'full' },
  { path: 'index', redirectTo: '/' },
  { path: 'blog/2021/balanced-brackets', component: BalancedBracketsComponent },
  { path: 'blog/2021/balanceo-de-parentesis', component: BalanceoDeParentesisComponent },
];

@NgModule({
  declarations: [
    AngularStackUpgradeDockerComponent,
    BalancedBracketsComponent,
    BalanceoDeParentesisComponent
  ],
  imports: [
    CommonModule,
    CodeBlockModule,
    RouterModule.forRoot(
      blogRoutes,
      { enableTracing: true }
    )
  ]
})
export class BlogModule { }

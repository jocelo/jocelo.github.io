import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularStackUpgradeDockerComponent } from './angular-stack-upgrade-docker/angular-stack-upgrade-docker.component';
import { BalancedBracketsComponent } from './balanced-brackets/balanced-brackets.component';
import { BalanceoDeParentesisComponent } from './balanceo-de-parentesis/balanceo-de-parentesis.component';
import { SearchByTopicComponent } from './search-by-topic/search-by-topic.component';
import { QueEsUnaPilaComponent } from './que-es-una-pila/que-es-una-pila.component';

import { CodeBlockModule } from '../code-block/code-block.module';
import { WriterComponent } from '../writer/writer.component';
import { ReadNextComponent } from '../read-next/read-next.component';
import { ChipsModule } from '../chips/chips.module';
import { DockerizeAngularComponent } from './dockerize-angular/dockerize-angular.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { HighlightDirective } from '../highlight.directive';
import { UrlsConPalabrasClaveComponent } from './urls-con-palabras-clave/urls-con-palabras-clave.component';
import { WhatIsAStackComponent } from './what-is-a-stack/what-is-a-stack.component';
import { QueEsUnaColaComponent } from './que-es-una-cola/que-es-una-cola.component';
import { WhatIsAQueueComponent } from './what-is-a-queue/what-is-a-queue.component';
import { VscodeFormatOnSaveComponent } from './vscode-format-on-save/vscode-format-on-save.component';

const blogRoutes: Routes = [
  { path: 'blog/', redirectTo: '/', pathMatch: 'full' },
  { path: 'index', redirectTo: '/' },
  { path: 'blog/topic/:token', component: SearchByTopicComponent },
  { path: 'blog/balanced-brackets', component: BalancedBracketsComponent },
  { path: 'blog/balanceo-de-parentesis', component: BalanceoDeParentesisComponent },
  { path: 'blog/dockerize-angular', component: DockerizeAngularComponent },
  { path: 'blog/que-es-una-pila', component: QueEsUnaPilaComponent },
  { path: 'blog/what-is-a-stack', component: WhatIsAStackComponent },
  { path: 'blog/que-es-una-cola', component: QueEsUnaColaComponent },
  { path: 'blog/what-is-a-queue', component: WhatIsAQueueComponent },
  { path: 'blog/format-on-save-vscode', component: VscodeFormatOnSaveComponent },
];

@NgModule({
  declarations: [
    AngularStackUpgradeDockerComponent,
    BalancedBracketsComponent,
    BalanceoDeParentesisComponent,
    DockerizeAngularComponent,
    HighlightDirective,
    SearchByTopicComponent,
    QueEsUnaPilaComponent,
    UrlsConPalabrasClaveComponent,
    WriterComponent,
    ReadNextComponent,
    WhatIsAStackComponent,
    QueEsUnaColaComponent,
    WhatIsAQueueComponent,
    VscodeFormatOnSaveComponent
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

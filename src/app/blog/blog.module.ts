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
import { LightDividerDirective } from '../directives/light-divider.directive';
import { PostImageComponent } from '../components/post-image/post-image.component';
import { IntersectionObserverDirective } from '../directives/intersection-observer.directive';
import { SimpleArticleComponent } from './components/simple-article/simple-article.component';
import { DeleteWholeLineVsCodeComponent } from './delete-whole-line-vs-code/delete-whole-line-vs-code.component';

const blogRoutes: Routes = [
  { path: 'topic/:token', component: SearchByTopicComponent },
  { path: 'balanceo-de-parentesis', component: BalanceoDeParentesisComponent },
  { path: 'balanced-brackets', component: BalancedBracketsComponent },
  { path: 'dockerize-angular', component: DockerizeAngularComponent },
  { path: 'que-es-una-pila', component: QueEsUnaPilaComponent },
  { path: 'what-is-a-stack', component: WhatIsAStackComponent },
  { path: 'que-es-una-cola', component: QueEsUnaColaComponent },
  { path: 'what-is-a-queue', component: WhatIsAQueueComponent },
  { path: 'format-documents-on-save', component: VscodeFormatOnSaveComponent },
  { path: 'urls-dinamicos', component: UrlsConPalabrasClaveComponent },
  { path: 'delete-code-line', component: DeleteWholeLineVsCodeComponent }
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
    VscodeFormatOnSaveComponent,
    LightDividerDirective,
    PostImageComponent,
    IntersectionObserverDirective,
    SimpleArticleComponent,
    DeleteWholeLineVsCodeComponent
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
    RouterModule.forChild(
      blogRoutes
    )
  ]
})
export class BlogModule { }

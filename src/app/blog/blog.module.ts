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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { HighlightDirective } from '../highlight.directive';
import { UrlsConPalabrasClaveComponent } from './urls-con-palabras-clave/urls-con-palabras-clave.component';
import { WhatIsAStackComponent } from './what-is-a-stack/what-is-a-stack.component';
import { QueEsUnaColaComponent } from './que-es-una-cola/que-es-una-cola.component';
import { WhatIsAQueueComponent } from './what-is-a-queue/what-is-a-queue.component';
import { VscodeFormatOnSaveComponent } from './vscode-format-on-save/vscode-format-on-save.component';
import { LightDividerDirective } from '../directives/light-divider.directive';
import { PostImageComponent } from '../components/post-image/post-image.component';
import { PostTranslatedComponent } from '../components/post-translated/post-translated.component';
import { IntersectionObserverDirective } from '../directives/intersection-observer.directive';
import { SimpleArticleComponent } from './components/simple-article/simple-article.component';
import { DeleteWholeLineVsCodeComponent } from './delete-whole-line-vs-code/delete-whole-line-vs-code.component';
import { BorrarLineasVsCodeComponent } from './borrar-lineas-vs-code/borrar-lineas-vs-code.component';
import { SumaDosNumerosComponent } from './suma-dos-numeros/suma-dos-numeros.component';
import { TwoSumComponent } from './two-sum/two-sum.component';
import { AutoformatoArchivosComponent } from './autoformato-archivos/autoformato-archivos.component';
import { BestTimeToBuyAndSellStockComponent } from './best-time-to-buy-and-sell-stock/best-time-to-buy-and-sell-stock.component';
import { ContainsDuplicateComponent } from './contains-duplicate/contains-duplicate.component';
import { HashTableComponent } from './hash-table/hash-table.component';
import { ContainsDuplicateEsComponent } from './contains-duplicate-es/contains-duplicate-es.component';
import { BestTimeToBuyAndSellStockEsComponent } from './best-time-to-buy-and-sell-stock-es/best-time-to-buy-and-sell-stock-es.component';
import { ProductOfArrayExceptSelfComponent } from './product-of-array-except-self/product-of-array-except-self.component';
import { BlindLeetcodeComponent } from './blind-leetcode/blind-leetcode.component';
import { PublishAngularNpmPackageComponent } from './publish-angular-npm-package/publish-angular-npm-package.component';
import { NgxGgistModule } from 'ngx-ggist';
import { FormsModule } from '@angular/forms';
import { ParameterOrArgumentComponent } from './parameter-or-argument/parameter-or-argument.component';

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
  { path: 'autoformato-archivo-al-guardar', component: AutoformatoArchivosComponent },
  { path: 'urls-dinamicos', component: UrlsConPalabrasClaveComponent },
  { path: 'delete-code-line', component: DeleteWholeLineVsCodeComponent },
  { path: 'eliminar-linea-codigo', component: BorrarLineasVsCodeComponent },
  { path: 'two-sum-en-espanol', component: SumaDosNumerosComponent },
  { path: 'two-sum', component: TwoSumComponent },
  { path: 'best-time-to-buy-and-sell-stock', component: BestTimeToBuyAndSellStockComponent },
  { path: 'best-time-to-buy-and-sell-stock-en-espanol', component: BestTimeToBuyAndSellStockEsComponent },
  { path: 'contains-duplicate', component: ContainsDuplicateComponent },
  { path: 'what-is-a-hash-table', component: HashTableComponent },
  { path: 'contains-duplicate-en-espanol', component: ContainsDuplicateEsComponent },
  { path: 'product-of-array-except-self', component: ProductOfArrayExceptSelfComponent },
  { path: 'blind-75-leetcode', component: BlindLeetcodeComponent },
  { path: 'publish-angular-npm-package', component: PublishAngularNpmPackageComponent },
  { path: 'argument-or-parameter', component: ParameterOrArgumentComponent },
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
    PostTranslatedComponent,
    IntersectionObserverDirective,
    SimpleArticleComponent,
    DeleteWholeLineVsCodeComponent,
    BorrarLineasVsCodeComponent,
    SumaDosNumerosComponent,
    TwoSumComponent,
    AutoformatoArchivosComponent,
    BestTimeToBuyAndSellStockComponent,
    ContainsDuplicateComponent,
    HashTableComponent,
    ContainsDuplicateEsComponent,
    BestTimeToBuyAndSellStockEsComponent,
    ProductOfArrayExceptSelfComponent,
    BlindLeetcodeComponent,
    PublishAngularNpmPackageComponent,
    ParameterOrArgumentComponent
  ],
  imports: [
    CommonModule,
    CodeBlockModule,
    ChipsModule,
    FontAwesomeModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    NgxGgistModule,
    RouterModule.forChild(
      blogRoutes
    )
  ]
})
export class BlogModule { }

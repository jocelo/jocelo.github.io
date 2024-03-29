import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CertificationsComponent } from './layouts/certifications/certifications.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';
import { TechStackComponent } from './layouts/tech-stack/tech-stack.component';
import { PersonalComponent } from './layouts/personal/personal.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogModule } from './blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { GamesComponent } from './layouts/games/games.component';

const appRoutes: Routes = [
  { path: 'index', redirectTo: '/home' },
  { path: 'home', component: PersonalComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'latest', component: BlogComponent },
  { path: 'games', component: GamesComponent },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CertificationsComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    PageNotFoundComponent,
    PersonalComponent,
    PortfolioComponent,
    TechStackComponent,
    GamesComponent
  ],
  imports: [
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        relativeLinkResolution: 'legacy',
        scrollPositionRestoration: 'enabled'
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js'),
      lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

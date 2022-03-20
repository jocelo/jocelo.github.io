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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const appRoutes: Routes = [
  { path: 'index', redirectTo: '/home' },
  { path: 'home', component: PersonalComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'latest', component: BlogComponent },
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
    TechStackComponent
  ],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        relativeLinkResolution: 'legacy',
        enableTracing: false
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

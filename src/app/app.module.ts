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
import { ChipComponent } from './components/chip/chip.component';
import { BlogModule } from './blog/blog.module';

// import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

const appRoutes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'home', redirectTo: '/all', pathMatch: 'full' },
  { path: 'index', redirectTo: '/all' },
  { path: 'all', component: PersonalComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CertificationsComponent,
    ChipComponent,
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    PageNotFoundComponent,
    PersonalComponent,
    PortfolioComponent,
    TechStackComponent,
  ],
  imports: [
    BlogModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, relativeLinkResolution: 'legacy' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

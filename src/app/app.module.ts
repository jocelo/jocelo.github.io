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
import { PostComponent } from './layouts/post/post.component';
import { SectionCardComponent } from './components/section-card/section-card.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  { path: 'index', redirectTo: '/all' },
  { path: 'all', component: PersonalComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: PostComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CertificationsComponent,
    PortfolioComponent,
    LandingComponent,
    PageNotFoundComponent,
    TechStackComponent,
    PersonalComponent,
    FooterComponent,
    BlogComponent,
    PostComponent,
    SectionCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

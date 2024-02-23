import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { CareerComponent } from './pages/career/career.component';
import { ProjectTableComponent } from './pages/project-table/project-table.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

export const routes: Routes = [
  { component : HomeComponent, path : 'Welcome', pathMatch : 'full' },
  { component : CareerComponent, path : 'Career', pathMatch : 'full' },
  { component : ProjectTableComponent, path : 'Projects', pathMatch : 'full' },
  { component : ProjectDetailComponent, path : 'Projects/:id', pathMatch : 'full' },
  { component : ContactMeComponent, path : 'ContactMe', pathMatch : 'full' },
  { component : HomeComponent, path : '**', pathMatch : 'full' }
];

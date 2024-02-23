import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fdr-navbar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  faSun = faSun;
  faMoon = faMoon;
  router = inject(Router);


  navigate = (page: string) => this.router.navigate([page]);
  navigateItem = (page: string, options : string) => this.router.navigate([page, options]);
}

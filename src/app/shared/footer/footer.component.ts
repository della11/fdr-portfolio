import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'fdr-footer',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  faGitHub = faGithub;
  faLinkedIn = faLinkedin;
  faInstagram = faInstagram;

  router = inject(Router);



  navigateToGitHub() {
    window.open('https://github.com/della11', '_blank');
  }

  navigateToLinkedIn()
  {
    window.open('https://www.linkedin.com/in/fabio-della-rosa', '_blank');
  }

  navigateToInstagram()
  {
    window.open('https://www.instagram.com/fabiodellarosa_', '_blank');
  }

}

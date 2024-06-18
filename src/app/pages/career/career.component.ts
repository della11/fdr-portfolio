import { Component } from '@angular/core';
import { Career } from '../../models/career';
import { SkillEnum, WorkEnum } from '../../models/enums';

@Component({
  selector: 'fdr-career',
  standalone: true,
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  badges = ['neutral', 'primary', 'secondary', 'accent', 'ghost'];
  getBadgeClass() {
    return `badge badge-${this.badges[Math.floor(Math.random() * this.badges.length)]} m-2`;
}

  careers : Career[] = [];
  /**
   * Mock test data
   */
  constructor() {

    let _4solid: Career = { description: 'mock description 1', company: { name : '4Solid', location : 'Brescia, Italy', logo : ''}, type: WorkEnum.Mixed, skills: [SkillEnum.WPF, SkillEnum.WF, SkillEnum.CSharp], start: new Date(2019, 9, 4), end: new Date(2022, 3, 1) };
    let alten: Career = { description: 'mock description 2', company: { name : 'Alten', location : 'Milan, Italy', logo : ''}, type: WorkEnum.Remote, skills: [SkillEnum.HTML, SkillEnum.CSS, SkillEnum.TS, SkillEnum.Angular, SkillEnum.CSharp], start: new Date(2022, 5, 1), end: new Date(2023, 9, 1) };
    let blazar: Career = { description: 'mock description 3', company: { name : 'BlazarGroup', location : 'Lugano, Switzerland', logo : ''}, type: WorkEnum.Remote, skills: [SkillEnum.HTML, SkillEnum.CSS, SkillEnum.TS, SkillEnum.Angular, SkillEnum.CSharp], start: new Date(2022, 9, 4), end: null };

    this.careers.push(...[_4solid, alten, blazar]);
    this.careers.sort((a, b) => b.start.getTime() - a.start.getTime());
  }

}

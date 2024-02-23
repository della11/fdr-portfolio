import { Component } from '@angular/core';

@Component({
  selector: 'fdr-project-table',
  standalone: true,
  imports: [],
  templateUrl: './project-table.component.html',
  styleUrl: './project-table.component.scss'
})
export class ProjectTableComponent {
  values: any = [{ id: 0, name: 'nome', description: 'desc', tags: ['angular', 'firebase'] },
    { id: 1, name: 'nome2', description: 'desc2', tags: ['angular', 'firebase', 'c#'] },
    { id : 2, name : 'nome3', description : 'desc3', tags : ['angular', 'firebase', 'chatgpt']},  ]

}

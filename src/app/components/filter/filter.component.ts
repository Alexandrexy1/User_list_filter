import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,

  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  statusList = [
    {
      value: "Ativo",
      viewValue: "Inativo"
    }
  ]
}

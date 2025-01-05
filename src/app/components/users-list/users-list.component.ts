import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  standalone: false,

  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input("usersList") usersList: IUser[] = [];

  @Output("userClicked") userClicked = new EventEmitter<string | null>();

  displayedColumns: string[] = ['name', 'date', 'status'];



  onClickUser(event: MouseEvent) {
    const eventClicked = event.target as HTMLTableCellElement;
    this.userClicked.emit(eventClicked.textContent);
  }
}


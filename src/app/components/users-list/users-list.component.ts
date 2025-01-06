import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  standalone: false,

  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = [];

  @Output("userClicked") userClicked = new EventEmitter<IUser>();

  displayedColumns: string[] = ['name', 'date', 'status'];


  onClickUser(user: IUser) {
    this.userClicked.emit(user);
  }
}


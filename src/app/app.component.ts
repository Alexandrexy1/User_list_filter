import { Component, OnInit } from '@angular/core';
import { usersList as usersListImported } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = []
  showUserDetails = false;

  userDetails: IUser = { } as IUser;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = usersListImported;
      this.usersListFiltered = this.usersList;
    }, 10);
  }

  userClickedEvent(user: IUser) {
    if (user) this.userDetails = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }

}


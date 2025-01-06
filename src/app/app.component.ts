import { Component, OnInit } from '@angular/core';
import { usersList as usersListImported } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  showUserDetails = false;

  userDetails: IUser = { } as IUser;

  ngOnInit(): void {
    setTimeout(() => this.usersList = usersListImported, 2000);
  }

  userClickedEvent(user: IUser) {
    if (user) this.userDetails = user;
    this.showUserDetails = true;
  }
}

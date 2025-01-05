import { Component } from '@angular/core';
import { usersList as usersListImported } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  usersList = usersListImported;

  userDetails: IUser = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: {
      street: '',
      number: 0,
      city: '',
      country: ''
    },
    date: '',
    status: false,
    job: ''
  };

  userClickedEvent(name: string | null) {
    const user = this.usersList.find(user => user.name === name?.trim());
    if (user) this.userDetails = user;
  }
}

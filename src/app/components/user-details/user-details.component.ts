import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  standalone: false,

  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input("userDetails") userDetails: IUser = {} as IUser;

    formatPhoneNumber(number: string | number) {
      const cleaned = number.toString().replace(/\D/g, "");
      const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);

      if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;
      else return number;
    }

}

import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address',
  standalone: false
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress | undefined): string {
    const INVALID_ADDRESS = !address || !address.city || !address.street || !address.state
      || !address.country || address.number === null || address.number === undefined

    if (INVALID_ADDRESS) return "Endereço indisponível ou inválido.";

    return `${address.street}, ${address.number}, ${address.city} - ${address.state}`;
  }

}

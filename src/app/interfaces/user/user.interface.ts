import { IAddress } from "./address.interface";

export interface IUser {
  name: string
  email: string
  password: string
  phone: string
  address?: IAddress
  date: string
  status: boolean
  job: string
}
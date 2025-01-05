import { IUser } from "../interfaces/user/user.interface";

export const usersList: IUser[] = [
  {
    name: "João Silva",
    email: "joao@teste.com",
    password: "123456",
    phone: "1111111111",
    address: {
      street: "Bacon street",
      number: 120,
      city: "Bacon City",
      country: "Bacon Country",

    },
    date: "2024-11-01T12:34:00Z",
    status: true,
    job: "Cloud Engineer"
  },
  {
    name: "Vitoria Fernandes",
    email: "vitoria@teste.com",
    password: "123456",
    phone: "9999999999",
    address: {
      street: "Banana street",
      number: 438,
      city: "Banana City",
      country: "Banana Country"
    },
    date: "2024-12-05T15:21:00Z",
    status: false,
    job: "QA Tester"
  },
  {
    name: "Julia Pereira",
    email: "julia@teste.com",
    password: "123456",
    phone: "8888888888",
    address: {
      street: "Blue street",
      number: 390,
      city: "Blue City",
      country: "Blue Country"
    },
    date: "2024-11-15T20:25:00Z",
    status: true,
    job: "Frontend Developer"
  },
  {
    name: "Carlos Sousa",
    email: "carlos@teste.com",
    password: "123456",
    phone: "7777777777",
    address: {
      street: "Orange street",
      number: 91,
      city: "Orange City",
      country: "Orange Country"
    },
    date: "2024-12-23T09:45:00Z",
    status: true,
    job: "Backend Developer"
  },
  {
    name: "Jair Mendes",
    email: "jair@teste.com",
    password: "123456",
    phone: "6666666666",
    address: {
      street: "Lemon street",
      number: 30,
      city: "Lemon City",
      country: "Lemon Country"
    },
    date: "2024-12-29T23:53:00Z",
    status: false,
    job: "Fullstack Developer"
  },
]


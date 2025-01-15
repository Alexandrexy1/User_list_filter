import { IFilterOptions } from "../interfaces/filter-options.interface";
import { IUser } from "../interfaces/user/user.interface";
import { isWithinInterval } from "date-fns";


export function filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
  let filteredList: IUser[] = [];
  filteredList = filterUsersListByName(filterOptions.name, usersList)
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
  return filteredList;
}

function filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
  if (name === undefined) return usersList;
  const filteredList = usersList.filter(user => user.name.toUpperCase().includes(name.toUpperCase()));

  return filteredList;
}

function filterUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
  if (status === undefined) return usersList;
  const filteredList = usersList.filter(user => user.status === status);

  return filteredList
}

function filterUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATES_NOT_SELECTED) return usersList;

  const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.date), {
    start: startDate,
    end: endDate
  })

  const filteredList = usersList.filter(checkDateInterval);

  return filteredList
}

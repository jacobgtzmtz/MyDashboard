import { IUser } from "./iusers-response";

export interface IState{
    users: IUser[],
    loading: boolean
  }
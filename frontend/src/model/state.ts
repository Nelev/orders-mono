import { IUser } from "./user";

export interface IState {
  setUser: (user: IUser | null) => void;
  user: IUser | null;
}

import { create } from "zustand";
import { IState } from "./model/state";
import { IUser } from "./model/user";

const useStore = create<IState>((set) => ({
  user: null,
  setUser: (newUser: IUser | null) => set(() => ({ user: newUser })),
}));

export default useStore;

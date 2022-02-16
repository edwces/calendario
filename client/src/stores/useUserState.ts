import create from "zustand";
import { User } from "../generated/graphql";

interface IUserStateValues {
  status: "SIGNOUT" | "SIGNIN";
  user: Partial<User> | null;
}

interface IUserStateActions {
  login: (user: Partial<User>) => void;
  logout: () => void;
}

type IUserState = IUserStateValues & IUserStateActions;

const useUserState = create<IUserState>((set) => ({
  status: "SIGNOUT",
  user: null,
  login: (user: Partial<User>) =>
    set((state) => {
      status: "SIGNIN";
      user: user;
    }),
  logout: () =>
    set((state) => {
      status: "SIGNOUT";
    }),
}));

export default useUserState;

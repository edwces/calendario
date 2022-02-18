import {
  createContext,
  ReactChild,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { useMeQuery, User } from "../../generated/graphql";

// TYPES

interface IUserStateValues {
  status: "signOut" | "signIn" | "idle";
  user: Partial<User> | null;
}

interface IUserStateActions {
  login: (user: Partial<User>) => void;
  logout: () => void;
}

interface UserStateProviderProps {
  children: ReactChild | ReactChild[];
}

type IUserState = IUserStateValues & IUserStateActions;

type IReducerActions =
  | { type: "SIGNIN"; payload: Partial<User> }
  | { type: "SIGNOUT" };

// CONTEXT

const userStateContext = createContext<IUserState>({
  status: "signOut",
  user: null,
  login: () => null,
  logout: () => null,
});

// PROVIDER

export function UserStateProvider({ children }: UserStateProviderProps) {
  const [result, reexecute] = useMeQuery();
  const [state, dispatch] = useReducer(userReducer, {
    status: "idle",
    user: null,
  });
  const { data, fetching, error } = result;

  const actions: IUserStateActions = useMemo(
    () => ({
      login: (user: Partial<User>) =>
        dispatch({ type: "SIGNIN", payload: user }),
      logout: () => dispatch({ type: "SIGNOUT" }),
    }),
    []
  );

  useEffect(() => {
    if (error) actions.logout();
    if (!error && !fetching) actions.login(data!.me);
  }, [actions, result]);

  return (
    <userStateContext.Provider
      value={{
        ...actions,
        ...state,
      }}
    >
      {children}
    </userStateContext.Provider>
  );
}

// REDUCER

const userReducer = (
  state: IUserStateValues,
  action: IReducerActions
): IUserStateValues => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        status: "signIn",
        user: action.payload,
      };
    case "SIGNOUT":
      return {
        ...state,
        status: "signOut",
        user: null,
      };
  }
};

export default userStateContext;

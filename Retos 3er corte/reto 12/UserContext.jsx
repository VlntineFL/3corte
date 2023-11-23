import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();

const initialState = {
  user: null,
  lastVisitedPage: "/",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "SET_LAST_VISITED_PAGE":
      return {
        ...state,
        lastVisitedPage: action.payload,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const setLastVisitedPage = (page) => {
    dispatch({ type: "SET_LAST_VISITED_PAGE", payload: page });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        lastVisitedPage: state.lastVisitedPage,
        login,
        logout,
        setLastVisitedPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUser };
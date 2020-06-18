import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";

// A structure of protected Routes

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isUserLoggedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

var isUserLoggedIn = false;
auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    isUserLoggedIn = true;
  } else {
    // No user is signed in.
    isUserLoggedIn = false;
  }
});

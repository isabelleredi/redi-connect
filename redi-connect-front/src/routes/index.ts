import React from "react";
import { RouteProps } from "react-router";
import { routes__loggedOut } from "./routes__logged-out";
import { routes__loggedIn } from "./routes__logged-in";

// TODO: Replace React.SFC? It was added ad a quickfix to react-router complaining..
export interface RouteDefinition extends RouteProps {
  requiresLoggedIn?: boolean;
  name?: string;
}

export const allRoutes = [...routes__loggedOut, ...routes__loggedIn];
export default allRoutes;

import { NextFetchEvent, NextRequest } from "next/server";
import { MiddlewareFactory } from "./types";

type WithLoggerOptions = {
  routes: string[];
};

export const withLogger = (options: WithLoggerOptions): MiddlewareFactory => {
  const { routes } = options;

  // configuration

  return (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
      // write only actions
      // const customMatcher = matcher(request.nextUrl.pathname);
      // if (customMatcher(routes)) {
      // }
      console.log("Log some data here", request.nextUrl.pathname);

      return next(request, _next);
    };
  };
};

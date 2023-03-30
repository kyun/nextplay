import { NextMiddleware, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types";
export function stackMiddlewares(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  console.log("stackMiddlewares", functions, index);
  const current = functions[index];
  if (current) {
    const next = stackMiddlewares(functions, index + 1);
    return current(next, matcher);
  }
  return () => NextResponse.next();
}

export const matcher = (pathname: string) => {
  return (paths: string[]) => {
    return paths.some((path) => pathname.startsWith(path));
  };
};

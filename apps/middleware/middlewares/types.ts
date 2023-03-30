import { NextMiddleware } from "next/server";
export type MiddlewareFactory = (
  middleware: NextMiddleware,
  matcher?: any
) => NextMiddleware;

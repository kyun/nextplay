// middleware.ts

import { withHeaders } from "middlewares/withHeaders";
import { withLogger } from "middlewares/withLogger";
import { stackMiddlewares } from "middlewares/stackMiddleware";

const middlewares = [
  //withLogger({ routes: [""] }),
  withHeaders,
];

export default stackMiddlewares(middlewares);

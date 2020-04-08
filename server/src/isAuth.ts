import { MiddlewareFn } from "type-graphql";
import { Context } from "./context";
import { verify } from "jsonwebtoken";

// bearer {accessToken}

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new Error("Not authenticated.");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (error) {
    console.log(error);
    throw new Error("Not authenticated.");
  }

  return next();
};

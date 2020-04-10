import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 7), // 7 days expiration
    path: "/refresh_token",
  });
};

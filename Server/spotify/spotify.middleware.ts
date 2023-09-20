import express from "express";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const buddyList = require("spotify-buddylist");

async function main() {
  const spDcCookie = "put your cookie here";

  const { accessToken } = await buddyList.getWebAccessToken(spDcCookie);
  const friendActivity = await buddyList.getFriendActivity(accessToken);

  console.log(friendActivity);
}

export async function getFriendHistory(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<any> {
  // spDcCookie must be passed in from request
  const spDcCookie =
    "AQCyrXBKxds2B-H1P3ioFpbrTvWsdCtYd1YdGqwp9FaDfSWq9HMFpwr6lQTlSLct2tsGSXBrfzmzleq1IIRkrpkZ8s87ynOy0mCUYGECjhO3_58SbIYhPCMA0lbfKqgd-Rf5lpGJ-3OKM5zFcbCFZmyZ4BQv6K-XFGf7d4pZ9HsGp3SRDsmVaoda-pvkRKi-d9d2of3Jz8gYrPfRzYtabcY68RI";

  const { accessToken } = await buddyList.getWebAccessToken(spDcCookie);
  const friendActivity = await buddyList.getFriendActivity(accessToken);

  res.send(friendActivity);
}

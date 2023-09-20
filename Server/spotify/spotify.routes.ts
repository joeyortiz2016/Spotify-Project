import express from 'express';
import { getFriendHistory } from './spotify.middleware.js';
const spotifyRouter = express.Router();

// test endpoint 
spotifyRouter.get("/test", (req: express.Request, res: express.Response) => {
  res.send("GET test worked!!!! WOO HOOOOOO. I WANNNA DIEEE.")
});

// grab friend activity
spotifyRouter.get("/friend_history", getFriendHistory);
export default spotifyRouter;


import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json("Hello Rocketseat");
});

export default routes;

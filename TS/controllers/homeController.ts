import { Response, Request } from "express";

export const getLandingPage = (req: Request, res: Response) => {
    res.render("pages/landingPage");
}

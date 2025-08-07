import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/** Member **/
router.post("/login", memberController.login); // call
router.post("/signup", memberController.signup); // call

/** Product **/

/** Order **/

export default router;

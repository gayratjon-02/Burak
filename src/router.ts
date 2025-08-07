import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

/** Member **/
router.post("/member/login", memberController.login); // call
router.post("/member/signup", memberController.signup); // call
router.get("/member/detail", memberController.verifyAuth);

/** Product **/

/** Order **/

export default router;

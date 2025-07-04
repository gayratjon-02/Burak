// Controller'lar doim objectlar orqali hosil qilinadi
// import qilishimiz kerak libs ichidagi common.tsni
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/types/enums/member.enum";
const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome"); // standard
    res.send("Home Page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getHome:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("SignUp Page");
    console.log("getSignup"); // standard
  } catch (err) {
    console.log("Error getSignup:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin"); // standars
    res.send("Login Page");
  } catch (err) {
    console.log("Error getLogin:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    // TODO: SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    res.send(err);
    console.log("Error processSignup:", err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    // TODO: SESSIONS AUTHENTICATION

    res.send(result);
  } catch (err) {
    res.send(err);
    console.log("Error processLogin:", err);
  }
};

export default restaurantController;

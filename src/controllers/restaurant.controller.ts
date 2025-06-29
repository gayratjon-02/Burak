// Controller'lar doim objectlar orqali hosil qilinadi
// import qilishimiz kerak libs ichidagi common.tsni
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/types/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
    console.log("getLogin");
  } catch (err) {
    console.log("Error getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("SignUp Page");
    console.log("getSignup");
  } catch (err) {
    console.log("Error getSignup:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("Error processLogin:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result );
  } catch (err) {
    res.send(err );
    console.log("Error processSignup:", err);
  }
};
export default restaurantController;

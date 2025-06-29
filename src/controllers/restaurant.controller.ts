// Controller'lar doim objectlar orqali hosil qilinadi
// import qilishimiz kerak libs ichidagi common.tsni
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home Page");
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

export default restaurantController;

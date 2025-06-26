// Controller'lar doim objectlar orqali hosil qilinadi
// import qilishimiz kerak libs ichidagi common.tsni
import { Request, Response } from "express";

import { T } from "../libs/types/common";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, getHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
    console.log("ishladi");

  } catch (err) {
    console.log("Error getLogin:", err);
    console.log("ishlamadi");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("SignUp Page");
  } catch (err) {
    console.log("Error getSignup:", err);
  }
};

export default restaurantController;

import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();

router.post(
  "/register",
  passport.authenticate("register", {
    passReqToCallback: true,
    session: false,
    failureRedirect: "api/sessions/failedRegister",
    failureMessage: true,
  }),
  (req, res) => {
    res.send({
      status: "success",
      message: "User registered",
      payload: req.user._id,
    });
  }
);

router.get("/failedRegister", (req, res) => {
  console.log(req.message);
  res.send("failed register");
});

router.post(
  "login",
  passport.authenticate("login", {
    //passReqToCallback: true,
    session: false,
    failureRedirect: "/api/sessions/failedLogin",
  }),
  (req, res) => {
    const serializeUser = {
      id: req.user._id,
      name: `${req.user.first_name} ${req.user.last_name}`,
      role: req.user.role,
      email: req.user.email,
    };
    const token = jwt.sign(serializeUser, "coderSecret", { expiresIn: "1h" });
    res
      .cookie("coderCookie", token, { maxAge: 3600 })
      .send({ status: "success", payload: serializeUser });
  }
);

router.get("/failedLogin", (req, res) => {
  console.log(req.message);
  res.send("failed register");
});

export default router;

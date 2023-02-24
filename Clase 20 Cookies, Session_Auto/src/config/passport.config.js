import passport from "passport";
import local from "passport-local";
import userModel from "../models/user.js";
import {createHash,isValidPassword} from "../utils.js";
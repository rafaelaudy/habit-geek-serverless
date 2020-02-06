import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const { APP_SECRET, getUserId } = require("../modules/auth/jwtUtils");

export const signUp = async (parent, { email, password }) => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  // const user = await DATABASE
  const user = { id: "id" };
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
};

export const login = async (parent, { email, password }) => {
  // const user = await DATABASE
  const user = { id: "id", password: "password" };
  if (!user) {
    throw new Error("No such user found");
  }
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
};

export const changePassword = (
  parent,
  { email, oldPassword, newPassword },
  context
) => {
  getUserId(context);
  return true;
};

export const sendEmailWithNewPasswordLink = (parent, { email }, context) => {
  getUserId(context);
  return true;
};

import { SessionOptions } from "iron-session";
import { COOKIE_KEYS } from "../constants";

export interface SessionData {
  nonce?: string;
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD!,
  cookieName: COOKIE_KEYS.JWT,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

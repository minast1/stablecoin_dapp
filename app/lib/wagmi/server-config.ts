import { cookieToInitialState } from "wagmi";
import { config } from "./config";

export function getInitialState(cookie?: string) {
  return cookie ? cookieToInitialState(config, cookie) : undefined;
}

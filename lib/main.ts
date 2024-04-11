import * as dotenv from "dotenv";
import { init } from "./config";
dotenv.config();

init();

export * from "./api/index";
export * from "./utilities/index";
export { init } from "./config";

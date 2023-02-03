import { types } from "react-bricks/frontend";
import HeaderEmail from "./email/HeaderEmail";
import MainEmail from "./email/MainEmail";
import FooterEmail from "./email/FooterEmail";
import HrEmail from "./email/HrEmail";

const bricks: types.Brick<any>[] = [
  HeaderEmail,
  MainEmail,
  FooterEmail,
  HrEmail,
];

export default bricks;

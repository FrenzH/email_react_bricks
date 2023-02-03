import { types } from "react-bricks/frontend";
import HeaderEmail from "./email/headerEmail";
import MainEmail from "./email/mainEmail";
import FooterEmail from "./email/footerEmail";
import HrEmail from "./email/hrEmail";
import HeroUnit from "./HeroUnit";
const bricks: types.Brick<any>[] = [
  HeaderEmail,
  MainEmail,
  FooterEmail,
  HrEmail,
  HeroUnit,
];

export default bricks;

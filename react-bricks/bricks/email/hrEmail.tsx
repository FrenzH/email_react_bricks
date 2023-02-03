import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { Section } from "./utilities/section";
import { Container } from "./utilities/container";
import { Column } from "./utilities/column";
import { Hr } from "./utilities/hr";
//=============================
// Local Types
//=============================

interface HeaderEmailProps {
  lineColor: types.IColor;
}

//=============================
// Component to be rendered
//=============================

const HrEmail: types.Brick<HeaderEmailProps> = ({ lineColor }) => {
  return (
    <Container>
      <Section>
        <Hr
          style={
            {
              /*</Section>borderColor: lineColor.color */
            }
          }
        ></Hr>
      </Section>
    </Container>
  );
};

//=============================
// Brick Schema
//=============================

HrEmail.schema = {
  name: "Hr-email",
  label: "hr email",
  getDefaultProps: () => ({
    lineColor: { color: "black" },
  }),
  sideEditProps: [
    {
      name: "lineColor",
      label: "Line color",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: "White",
            value: { color: "	#ffffff" },
          },
          {
            label: "Black",
            value: { color: "#000000" },
          },
          {
            label: "red",
            value: { color: "	#ff0000" },
          },
        ],
      },
    },
  ],
};

export default HrEmail;

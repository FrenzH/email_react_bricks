import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { Section } from "./utilities/section";
import { Container } from "./utilities/container";
import { Column } from "./utilities/column";
import { Hr } from "./utilities/hr";
//=============================
// Local Types
//=============================

interface HeaderEmailProps {
  color: { color: string; value: { color: string; className: string } };
}

//=============================
// Component to be rendered
//=============================

const HrEmail: types.Brick<HeaderEmailProps> = ({
  color = { label: "black", value: { color: "black", className: "red" } },
}) => {
  return (
    <Container>
      <Section>
        <Hr style={{ borderColor: color.value.className }}></Hr>
      </Section>
    </Container>
  );
};

//=============================
// Brick Schema
//=============================

HrEmail.schema = {
  name: "HT-email",
  label: "hr email",
  getDefaultProps: () => ({
    color: { label: "black", value: { color: "black", className: "black" } },
  }),
  sideEditProps: [
    {
      name: "line_color",
      label: "Line color",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: "White",
            value: { color: "white", className: "green" },
          },
          {
            label: "Black",
            value: { color: "black", className: " black" },
          },
          {
            label: "red",
            value: { color: "red", className: " yellow" },
          },
        ],
      },
    },
  ],
};

export default HrEmail;

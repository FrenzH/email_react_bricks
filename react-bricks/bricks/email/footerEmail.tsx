import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { Section } from "./utilities/section";
import { Container } from "./utilities/container";
import { Column } from "./utilities/column";
import { Hr } from "./utilities/hr";
//=============================
// Local Types
//=============================

type alignText =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

interface HeaderEmailProps {
  titleLineHeigth: number;
  textLineHeigth: number;
  sizeText: string;
  textSize: number;
  textColor: { color: string; className: string };
  textFlow: alignText;
}

//=============================
// Component to be rendered
//=============================

const FooterEmail: types.Brick<HeaderEmailProps> = ({
  textLineHeigth,
  textSize,
  sizeText = `${textSize}px`,
  textFlow,
}) => {
  return (
    <Container>
      <Section>
        <RichText
          renderBlock={({ children }) => (
            <p
              style={{
                lineHeight: textLineHeigth,
                fontSize: sizeText,
                textAlign: textFlow,
              }}
            >
              {children}
            </p>
          )}
          placeholder="Type a text..."
          propName="text"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Link,
            types.RichTextFeatures.Heading1,
            types.RichTextFeatures.UnorderedList,
            types.RichTextFeatures.OrderedList,
            types.RichTextFeatures.Heading2,
            types.RichTextFeatures.Heading3,
          ]}
        />
      </Section>
      <Section></Section>
    </Container>
  );
};

//=============================
// Brick Schema
//=============================

FooterEmail.schema = {
  name: "footer-email",
  label: "footer email",
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      groupName: "text",
      props: [
        {
          name: "textColor",
          label: "text color",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              {
                label: "red",
                value: {
                  color: "red",
                  className: "color : red",
                },
              },
              {
                label: "green",
                value: {
                  color: "green",
                  className: "color : green",
                },
              },
            ],
          },
        },
        {
          name: "textLineHeigth",
          label: "text line heigth",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 0,
            max: 10,
            step: 1,
          },
        },

        {
          name: "textSize",
          label: "text size",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 10,
            max: 40,
            step: 1,
          },
        },
        {
          name: "textFlow",
          label: "text flow",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "right", label: "rigth" },
              { value: "left", label: "left" },
              { value: "center", label: "center" },
            ],
          },
        },
      ],
    },
  ],
};

export default FooterEmail;

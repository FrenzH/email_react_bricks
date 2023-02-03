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
  sizeTitle: string;
  sizeText: string;
  textSize: number;
  titleSize: number;
  textColor: { color: string; className: string };
  textFlow: alignText;
}

//=============================
// Component to be rendered
//=============================

const MainEmail: types.Brick<HeaderEmailProps> = ({
  textLineHeigth,
  textSize,
  sizeText = `${textSize}px`,
  textFlow,
}) => {
  return (
    <Container style={{}}>
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
    </Container>
  );
};

//=============================
// Brick Schema
//=============================

MainEmail.schema = {
  name: "main-email",
  label: "main email",
  getDefaultProps: () => ({
    title: "Email title",
    text: "Lorem ipsum dolor sit amet.",
    textLineHeigth: 0,
    titlLineHeigth: 1,
    titleSize: 20,
    textSize: 20,

    titleColor: { color: "black", className: "black-f" },
  }),
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

export default MainEmail;

import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { Section } from "./utilities/section";
import { Container } from "./utilities/container";
import { Column } from "./utilities/column";
import { Hr } from "./utilities/hr";
//=============================
// Local Types
//=============================
type gridFlow = ["row" | "column"] | "dense";
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
  textColor: types.IColor;
  textFlow: alignText;
  titleFlow: alignText;
  bgColor: { color: string };
  gridDirection: gridFlow;
}

//=============================
// Component to be rendered
//=============================

const HeaderEmail: types.Brick<HeaderEmailProps> = ({
  textLineHeigth,
  titleLineHeigth,
  textSize,
  titleSize,
  sizeTitle = `${titleSize}px`,
  sizeText = `${textSize}px`,
  textColor,
  textFlow,
  titleFlow,
  bgColor,
  gridDirection,
}) => {
  return (
    <Container /*style={{ backgroundColor: bgColor.color }}*/>
      <Section>
        <Column>
          <RichText
            renderBlock={({ children }) => (
              <p
                style={{
                  lineHeight: textLineHeigth,
                  fontSize: sizeText,
                  //color: textColor.color,
                  textAlign: textFlow,
                  gridAutoFlow: gridDirection,
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
              types.RichTextFeatures.Link,
              types.RichTextFeatures.Heading2,
              types.RichTextFeatures.Heading3,
            ]}
            renderH1={({ children }) => (
              <h1
                style={{
                  lineHeight: titleLineHeigth,
                  fontSize: sizeTitle,
                  // color: textColor.color,
                  textAlign: titleFlow,
                }}
              >
                {children}
              </h1>
            )}
          />
        </Column>
        <Column>
          <Image propName="icon" alt="Icon" />
        </Column>
      </Section>
    </Container>
  );
};

//=============================
// Brick Schema
//=============================

HeaderEmail.schema = {
  name: "header-email",
  label: "header email",
  getDefaultProps: () => ({
    title: "Email title",
    text: "Lorem ipsum dolor sit amet.",
    textLineHeigth: 0,
    titleLineHeigth: 1,
    titleSize: 20,
    textSize: 20,
    textColor: { color: "black" },
    textFlow: "left",
    bgColor: "red",
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
                label: "black",
                value: {
                  color: "black",
                },
              },
              {
                label: "red",
                value: {
                  color: "red",
                },
              },
              {
                label: "green",
                value: {
                  color: "green",
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
          name: "titleLineHeigth",
          label: "title line heigth",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 1,
            max: 10,
            step: 1,
          },
        },
        {
          name: "titleSize",
          label: "title size",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 10,
            max: 70,
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
        {
          name: "titleFlow",
          label: "title flow",
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
        {
          name: "bgColor",
          label: "background color",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              {
                label: "black",
                value: {
                  color: "black",
                },
              },
              {
                label: "red",
                value: {
                  color: "red",
                },
              },
              {
                label: "green",
                value: {
                  color: "green",
                },
              },
            ],
          },
        },
      ],
    },
  ],
};

export default HeaderEmail;

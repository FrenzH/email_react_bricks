import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { Section } from "./utilities/section";
import { Container } from "./utilities/container";
import { Column } from "./utilities/column";
import { Hr } from "./utilities/hr";
//=============================
// Local Types
//=============================

interface HeaderEmailProps {
  title_lineHeigth: number;
  text_lineHeigth: number;
  sizeTitle: string;
  sizeText: string;
  text_size: number;
  title_size: number;
  text_color: { color: string; className: string };
}

//=============================
// Component to be rendered
//=============================

const MainEmail: types.Brick<HeaderEmailProps> = ({
  text_lineHeigth = 0,
  title_lineHeigth = 1,
  text_size = 10,
  title_size = 20,
  sizeTitle = `${title_size}px`,
  sizeText = `${text_size}px`,
}) => {
  return (
    <Container>
      <Section>
        <RichText
          renderBlock={({ children }) => (
            <p style={{ lineHeight: text_lineHeigth, fontSize: sizeText }}>
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
          renderH1={({ children }) => (
            <h1 style={{ lineHeight: title_lineHeigth, fontSize: sizeTitle }}>
              {children}
            </h1>
          )}
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
    text_lineHeigth: 0,
    title_lineHeigth: 1,
    title_size: 20,
    text_size: 20,

    title_color: { color: "black", className: "black-f" },
  }),
  sideEditProps: [
    {
      groupName: "text",
      props: [
        {
          name: "text_color",
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
          name: "text_lineHeigth",
          label: "text line heigth",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 0,
            max: 10,
            step: 1,
          },
        },
        {
          name: "title_lineHeigth",
          label: "title line heigth",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 1,
            max: 10,
            step: 1,
          },
        },
        {
          name: "title_size",
          label: "title size",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 10,
            max: 70,
            step: 1,
          },
        },
        {
          name: "text_size",
          label: "text size",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 10,
            max: 40,
            step: 1,
          },
        },
      ],
    },
  ],
};

export default MainEmail;

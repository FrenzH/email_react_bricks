import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { Section } from "./utilities/section";
import { Container } from "./utilities/container";
import { Column } from "./utilities/column";
import { Hr } from "./utilities/hr";
//=============================
// Local Types
//=============================

interface HeaderEmailProps {
  title_size: number;
  title_color: { color: string; className: string };
}

//=============================
// Component to be rendered
//=============================

const HeaderEmail: types.Brick<HeaderEmailProps> = ({
  title_size = 30,
  title_color = { color: "black", className: "black-f" },
}) => {
  return (
    
   <Container>
    <Section>
      <Column>
      <Text
                        placeholder="Type a title..."
                        propName="title"
                        renderPlaceholder={(props) => <h1>{props.children}</h1>}
                        renderBlock={(props) => (
                          <h1
                            className={`${title_color.className} text-center  size_title_${title_size} `}
                          >
                            {props.children}
                          </h1>
                        )}
                      /></Column>
      <Column>
      <Image
                propName="icon"
                alt="Icon"
                imageClassName="w-20 mb-5 mx-auto"
              />
      </Column>
    </Section>
    
    
    <Section>
      
      <RichText
                      renderBlock={(props) => (
                        <p className="">
                          {props.children}
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
                      ]}
                    />
     
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
    title_size: 30,
    title_color: { color: "black", className: "black-f" },
  }),
  sideEditProps: [
    {
      groupName: "title",
      props: [
        {
          name: "title_size",
          label: "title size",
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 30,
            max: 60,
            step: 2,
          },
        },
        {
          name: "title_color",
          label: "title color",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              {
                label: "red",
                value: {
                  color: "red",
                  className: "red-f",
                },
              },
              {
                label: "green",
                value: {
                  color: "green",
                  className: "green-f",
                },
              },
            ],
          },
        },
      ],
    },
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
                  className: "red-f",
                },
              },
              {
                label: "green",
                value: {
                  color: "green",
                  className: "green-f",
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

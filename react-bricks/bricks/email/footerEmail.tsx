import { Text, RichText, Image, types, Repeater } from "react-bricks/frontend";
import { Section } from "./utilities/section";
import { Container } from "./utilities/container";
import { Column } from "./utilities/column";
import { Hr } from "./utilities/hr";
//=============================
// Local Types
//=============================

interface HeaderEmailProps {}

//=============================
// Component to be rendered
//=============================

const FooterEmail: types.Brick<HeaderEmailProps> = () => {
  return (
    <Section>
      <Column>
        <Section>
          <Container>
            <Text
              placeholder="Type a title..."
              propName="title"
              renderPlaceholder={(props) => (
                <h1 className="text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100">
                  {props.children}
                </h1>
              )}
              renderBlock={(props) => <th>{props.children}</th>}
            />
            <Hr></Hr>
            <RichText
              renderBlock={(props) => (
                <p className="text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100">
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
          </Container>
        </Section>
      </Column>
      <Column>
        <Section>
          <Image
            propName="icon"
            alt="Icon"
            imageClassName="w-20 mb-5 mx-auto"
          />
        </Section>
      </Column>
    </Section>
  );
};

//=============================
// Brick Schema
//=============================

FooterEmail.schema = {
  name: "footer-email",
  label: "footer email",
  getDefaultProps: () => ({}),
  sideEditProps: [],
};

export default FooterEmail;

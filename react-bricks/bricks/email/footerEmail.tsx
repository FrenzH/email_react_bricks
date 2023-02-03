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
    <Container>
      <Section>
        <RichText
          renderBlock={(props) => <p className="">{props.children}</p>}
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

FooterEmail.schema = {
  name: "footer-email",
  label: "footer email",
  getDefaultProps: () => ({}),
  sideEditProps: [],
};

export default FooterEmail;

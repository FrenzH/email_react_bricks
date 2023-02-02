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

const MainEmail: types.Brick<HeaderEmailProps> = () => {
  return (
    <Section>
      <Column>
        <Section>
          <Container>
            <Text
              placeholder="Type a title..."
              propName="title"
              renderPlaceholder={(props) => (
                <h1 className="text-center">{props.children}</h1>
              )}
              renderBlock={(props) => <th>{props.children}</th>}
            />
            <Hr></Hr>
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
              ]}
            />
          </Container>
        </Section>
      </Column>
    </Section>
    

                    
  );
};

//=============================
// Brick Schema
//=============================

MainEmail.schema = {
  name: "main-email",
  label: "main email",
  getDefaultProps: () => ({}),
  sideEditProps: [],
};

export default MainEmail;

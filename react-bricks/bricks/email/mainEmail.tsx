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
   
          <Container>
            
            <Section>

              <Column>


              <Text
              placeholder="Type a title..."
              propName="title"
              renderPlaceholder={(props) => (
                <h1 className="text-center">{props.children}</h1>
              )}
              renderBlock={(props) => <th>{props.children}</th>}
            />
              
              
              
              </Column>





            </Section>

            <Hr></Hr>


                <Section>



                 



                    
            <RichText
              renderBlock={(props) =><ol><li className="">{props.children}</li></ol> }
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

MainEmail.schema = {
  name: "main-email",
  label: "main email",
  getDefaultProps: () => ({}),
  sideEditProps: [],
};

export default MainEmail;

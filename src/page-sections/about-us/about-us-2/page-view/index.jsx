import Box from '@mui/material/Box';
import Card from '@mui/material/Card'; // CUSTOM COMPONENTS

import Feature from '../Feature';
import FollowMore from '../FollowMore';
import { H6, Paragraph } from '@/components/typography';
export default function AboutUs2PageView() {
  return <Box py={3} maxWidth={930} margin="auto">
      <Card>
        <div style={{
        minHeight: 300
      }}>
          <img src="/static/thumbnail/thumbnail-7.png" width="100%" alt="about" />
        </div>

        <div className="p-3">
          <H6 fontSize={18} mb={1}>
            About Us
          </H6>

          <Paragraph textAlign="justify" color="text.secondary" lineHeight={1.7}>
            To other made was hunt, their not at them. How the that they task. Options they to
            hours. And the should company, in into being herself get approached country. We same
            bread so slid duty think chair. Had leather oh, client which phase uneasiness, way.
            Shared agency, kind he tone name was had how the name can one man he is and text doctor
            ridden spree. Farther, a not noise self-discipline. In is on both I and hazardous for
            the text devotion phase in much eminent his with state that we could there text
            presented. Changes acquired made, the feel.
          </Paragraph>

          <Paragraph textAlign="justify" color="text.secondary" mt={2} mb={8} lineHeight={1.7}>
            All economics city, a she day into and concept. Seemed I profiles with him as rolled
            called align than the up acknowledge a because and tag bold, if there pay both you
            original second of target. It eminent so more been best hope a of behind and the and
            attempt. That fur place. Into I bed. A couldn't it and secretly keep compensation
            necessary any wait must and yes, clothes, you'd it lay troubled magnitude, work for very
            act and of just conduct, partiality more behind gentlemen, an get few where were phase
            parts could the other and thought.
          </Paragraph>

          {
          /* FEATURE CARDS SECTION */
        }
          <Feature />

          {
          /* FOLLOW MORE FOOTER SECTION */
        }
          <FollowMore />
        </div>
      </Card>
    </Box>;
}
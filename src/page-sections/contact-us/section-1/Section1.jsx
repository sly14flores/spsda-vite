import Grid from '@mui/material/Grid2'; // CUSTOM COMPONENTS

import Location from './Location';
import FancyText from '@/components/fancy-text';
import { Paragraph } from '@/components/typography'; // STYLED COMPONENT

import { StyledRoot } from './styles';
export default function Section1() {
  return <StyledRoot>
      <img src="/static/map.png" alt="Placeholder" className="map" />

      <div className="content">
        <h1 className="title">
          Explore Our <FancyText>World</FancyText>
        </h1>

        <Paragraph mb={8} fontSize={18}>
          We'd love to talk about how we can help you.
        </Paragraph>

        <Grid container spacing={5}>
          <Grid size={{
          md: 4,
          sm: 6,
          xs: 12
        }}>
            <Location country="United States" address={<>
                  4100 Walcott Ave NE, <br /> 87109, New York, USA. <br /> (505) 855-5500 <br />
                  info@onion.usa
                </>} />
          </Grid>

          <Grid size={{
          md: 4,
          sm: 6,
          xs: 12
        }}>
            <Location country="United Kingdom" address={<>
                  20 New Bond St <br /> W1S 2UE, London, UK. <br /> 020 3214 9200 <br />
                  info@onion.uk
                </>} />
          </Grid>

          <Grid size={{
          md: 4,
          sm: 6,
          xs: 12
        }}>
            <Location country="Canada" address={<>
                  118-1959 152 St Surrey <br /> V4A 9E3, Canada. <br /> (604) 536-8244 <br />
                  info@onion.canada
                </>} />
          </Grid>
        </Grid>
      </div>
    </StyledRoot>;
}
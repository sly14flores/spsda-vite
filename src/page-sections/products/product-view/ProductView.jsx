import { useRef, useState } from 'react'; // MUI

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup'; // CUSTOM COMPONENTS

import Counter from '@/components/counter';
import Carousel from '@/components/carousel';
import ColorRadio from '@/components/color-radio';
import FlexBox from '@/components/flexbox/FlexBox';
import { H2, H6, Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Heart from '@/icons/Heart';
import Twitter from '@/icons/social/Twitter';
import ChevronDown from '@/icons/ChevronDown';
import Facebook from '@/icons/social/Facebook';
import Instagram from '@/icons/social/Instagram'; // STYLED COMPONENTS

import { CarouselRoot, SlideThumb, StyledIconButton } from './styles';
export default function ProductViewCard() {
  const carouselRef = useRef(null);
  const [colorSelect, setColorSelect] = useState('red');
  const [selectedSlide, setSelectedSlide] = useState(0); // HANDLE CHANGE PRODUCT COLOR

  const handleChangeColor = event => {
    setColorSelect(event.target.value);
  };

  const handleChangeSlide = index => {
    carouselRef.current.slickGoTo(index);
    setSelectedSlide(index);
  };

  return <Card sx={{
    padding: 2
  }}>
      <Grid container spacing={3}>
        {
        /* PRODUCT IMAGE CAROUSEL */
      }
        <Grid size={{
        md: 7,
        xs: 12
      }}>
          <CarouselRoot>
            <Carousel dots={false} slidesToShow={1} ref={carouselRef} afterChange={slideNo => setSelectedSlide(slideNo)}>
              {[0, 1, 2].map(item => <img key={item} className="slide" src="/static/products/shoe-10.png" />)}
            </Carousel>

            <StyledIconButton>
              <Heart />
            </StyledIconButton>
          </CarouselRoot>

          {
          /* SLIDE THUMBS */
        }
          <Stack justifyContent="center" direction="row" spacing={2} mt={1}>
            {[0, 1, 2].map((item, index) => <SlideThumb key={item} onClick={() => handleChangeSlide(index)} className={selectedSlide === index ? 'active' : ''}>
                <img src="/static/products/shoe-10.png" />
              </SlideThumb>)}
          </Stack>
        </Grid>

        {
        /* PRODUCT INFORMATION */
      }
        <Grid size={{
        md: 5,
        xs: 12
      }}>
          <Chip color="success" size="small" label="In Stock" />

          {
          /* PRODUCT CATEGORY */
        }
          <Paragraph color="text.secondary" mt={2}>
            NIKE
          </Paragraph>

          {
          /* PRODUCT NAME */
        }
          <H6>Air Jordan 270</H6>

          {
          /* PRODUCT PRICE */
        }
          <H2 color="primary.main" my={2}>
            $350
          </H2>

          {
          /* PRODUCT COLOR */
        }
          <FlexBox alignItems="center" gap={3}>
            <H6 fontSize={16}>Colors:</H6>

            <RadioGroup row value={colorSelect} onChange={handleChangeColor} sx={{
            gap: 1
          }}>
              <ColorRadio value="red" icon_color="#FF316F" />
              <ColorRadio value="pumpkin" icon_color="#FE8969" />
              <ColorRadio value="purple" icon_color="#8C8DFF" />
              <ColorRadio value="green" icon_color="#27CE88" />
            </RadioGroup>
          </FlexBox>

          {
          /* PRODUCT SIZE */
        }
          <FlexBox alignItems="center" gap={3} mt={3}>
            <H6 fontSize={16}>Select size:</H6>

            <TextField select size="small" variant="outlined" slotProps={{
            select: {
              native: true,
              IconComponent: ChevronDown
            }
          }} sx={{
            '.MuiNativeSelect-select': {
              lineHeight: 1
            }
          }}>
              <option value="42">42</option>
              <option value="41">41</option>
              <option value="40">40</option>
            </TextField>
          </FlexBox>

          {
          /* PRODUCT QUANTITY */
        }
          <FlexBox alignItems="center" gap={3} mt={3}>
            <H6 fontSize={16}>Quantity:</H6>
            <Counter />
            <Paragraph color="text.secondary">Available: 12</Paragraph>
          </FlexBox>

          {
          /* PRODUCT ADD TO CART BUTTON */
        }
          <FlexBox alignItems="center" gap={3} mt={3}>
            <Button variant="contained">Add to cart</Button>
            <Button variant="contained" color="success">
              Buy Now
            </Button>
          </FlexBox>

          {
          /* SOCIAL LINK BUTTONS */
        }
          <FlexBox mt={2}>
            <IconButton>
              <Facebook sx={{
              color: 'text.secondary'
            }} />
            </IconButton>

            <IconButton>
              <Instagram sx={{
              color: 'text.secondary'
            }} />
            </IconButton>

            <IconButton>
              <Twitter sx={{
              color: 'text.secondary'
            }} />
            </IconButton>
          </FlexBox>
        </Grid>
      </Grid>
    </Card>;
}
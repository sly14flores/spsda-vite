import { useRef, useState } from 'react'; // MUI

import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import IconButton from '@mui/material/IconButton';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary'; // MUI ICON COMPONENTS

import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LanguageOutlined from '@mui/icons-material/LanguageOutlined';
import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import Carousel from '@/components/carousel';
import { H4, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

import { CarouselRoot, SlideThumb } from './styles';
export default function Section2() {
  const carouselRef = useRef(null);
  const [selectedSlide, setSelectedSlide] = useState(0);

  const handleChangeSlide = index => {
    carouselRef.current.slickGoTo(index);
    setSelectedSlide(index);
  };

  return <div className="py-12">
      <Container maxWidth="lg">
        <Grid container spacing={{
        lg: 6,
        xs: 3
      }}>
          <Grid size={{
          lg: 7,
          md: 6,
          xs: 12
        }}>
            <CarouselRoot>
              <Carousel dots={false} slidesToShow={1} ref={carouselRef} afterChange={slideNo => setSelectedSlide(slideNo)}>
                {[0, 1, 2].map(item => <img key={item} className="slide" src="/static/products/rayban-glass-2.jpg" />)}
              </Carousel>
            </CarouselRoot>

            {
            /* SLIDE THUMBS */
          }
            <Stack justifyContent="center" direction="row" spacing={2} mt={1}>
              {[0, 1, 2].map((item, index) => <SlideThumb key={item} onClick={() => handleChangeSlide(index)} className={selectedSlide === index ? 'active' : ''}>
                  <img src="/static/products/rayban-glass-2.jpg" />
                </SlideThumb>)}
            </Stack>
          </Grid>

          <Grid size={{
          lg: 5,
          md: 6,
          xs: 12
        }}>
            <Stack spacing={4}>
              <H4 lineHeight={1.3}>
                Fashion Sunglass <br /> for man
              </H4>

              <Paragraph lineHeight={1} fontSize={18} fontWeight={500}>
                $18.50
              </Paragraph>

              <div>
                <Stack mb={1} direction="row" spacing={1} alignItems="center">
                  <LanguageOutlined fontSize="small" />
                  <p>Free worldwide shipping</p>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Inventory2Outlined fontSize="small" />
                  <p>In stock, ready to ship</p>
                </Stack>
              </div>

              <Stack spacing={2}>
                <Button fullWidth size="large" variant="outlined" startIcon={<ShoppingCartOutlined />}>
                  Add to cart
                </Button>

                <Button fullWidth size="large">
                  Buy now
                </Button>

                <Paragraph textAlign="center" px={4}>
                  This is a demonstration store. You can purchase products like this from{' '}
                  <Link href="https://ui-lib.com">UI Lib</Link>
                </Paragraph>
              </Stack>
            </Stack>

            <Stack spacing={4} mt={3}>
              <Paragraph>
                Made from durable water-resistant waxed canvas, these pouches are great for carrying
                cables, chargers, batteries, pens and other odds and ends. They are the perfect
                complement to our <Link href="https://ui-lib.com">UI Lib</Link> when you need
                additional organization.
              </Paragraph>

              <div>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    Shipping information
                  </AccordionSummary>

                  <AccordionDetails>
                    Made from durable water-resistant waxed canvas, these pouches are great for
                    carrying cables, chargers, batteries, pens and other odds and ends.
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>Ask a question</AccordionSummary>

                  <AccordionDetails>
                    Made from durable water-resistant waxed canvas, these pouches are great for
                    carrying cables, chargers, batteries, pens and other odds and ends.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div>
                <IconButton>
                  <Facebook />
                </IconButton>

                <IconButton>
                  <Twitter />
                </IconButton>

                <IconButton>
                  <LinkedIn />
                </IconButton>

                <IconButton>
                  <GitHub />
                </IconButton>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>;
}
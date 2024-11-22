import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'; // MUI ICON COMPONENTS

import Add from '@mui/icons-material/Add';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'; // CUSTOM COMPONENT

import Link from '@/components/link';
import { Paragraph } from '@/components/typography'; // STYLED COMPONENT

import { StyledRoot } from './styles'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // ==============================================================

// ==============================================================
export default function ProductCard({
  id,
  image,
  name,
  price
}) {
  return <StyledRoot>
      <div className="img-wrapper">
        <img alt="product" width="100%" src={image} />

        <div className="hover-actions">
          <IconButton className="view" LinkComponent={Link} href={`/products/${id}`}>
            <VisibilityOutlined />
          </IconButton>

          <IconButton className="cart">
            <ShoppingCartOutlined />
          </IconButton>
        </div>
      </div>

      <div className="content-root">
        <div>
          <Link href={`/products/${id}`}>
            <Paragraph color="text.primary" fontSize={16} fontWeight={500}>
              {name}
            </Paragraph>
          </Link>

          <Paragraph fontWeight={500} mt={1}>
            {currency(price)}
          </Paragraph>
        </div>

        <Button variant="outlined" color="secondary">
          <Add />
        </Button>
      </div>
    </StyledRoot>;
}
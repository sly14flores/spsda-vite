// MUI
import IconButton from '@mui/material/IconButton'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import City from '@/icons/City';
import Delete from '@/icons/Delete';
import CheckmarkCircle from '@/icons/CheckmarkCircle'; // STYLED COMPONENT

import { StyledCard } from './styles'; // ===================================================================

// ===================================================================
export default function BillingAddressCard({
  selected,
  handleChange
}) {
  const handleDelete = e => {
    e.stopPropagation();
  };

  return <StyledCard onClick={handleChange} selected={selected}>
      <div>
        <div className="place">
          <City />
          <H6 fontSize={16}>Office</H6>
        </div>

        <Paragraph color="text.secondary" lineHeight={1.8}>
          Ap #285-7193 Ullamcorper Avenue <br /> Amesbury HI 93373 <br /> USA
        </Paragraph>
      </div>

      {selected ? <div className="check-mark">
          <CheckmarkCircle />
        </div> : <IconButton onClick={e => handleDelete(e)}>
          <Delete color="action" />
        </IconButton>}
    </StyledCard>;
}
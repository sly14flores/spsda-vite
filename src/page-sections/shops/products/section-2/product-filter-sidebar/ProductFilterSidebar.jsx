import { useCallback } from 'react'; // MUI ICON COMPONENTS

import Clear from '@mui/icons-material/Clear';
import Refresh from '@mui/icons-material/Refresh'; // MUI

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'; // CUSTOM COMPONENTS

import RatingItem from './RatingItem';
import ColorCheckbox from './ColorCheckbox';
import CheckboxLabel from './CheckboxLabel';
import Scrollbar from '@/components/scrollbar';
import { FlexBetween } from '@/components/flexbox';
import { Paragraph } from '@/components/typography'; // TYPED

const GENDERS = [{
  label: 'Men',
  value: 'men'
}, {
  label: 'Women',
  value: 'women'
}, {
  label: 'Kids',
  value: 'kids'
}];
const CATEGORIES = [{
  label: 'Shoes',
  value: 'shoes'
}, {
  label: 'Jewelry',
  value: 'jewelry'
}, {
  label: 'Electronics',
  value: 'electronics'
}];
const COLORS = ['#6B7280', '#6950E8', '#11B886', '#FEBF06', '#EF4770'];
const RATINGS = [4, 3, 2, 1]; // ==============================================================

// ==============================================================
export default function ProductFilterSidebar({
  open,
  filters,
  filterApplied,
  handleClear,
  handleClose,
  onChangeFilters
}) {
  // FOR PRICE RANGE
  const handleChangePriceRange = useCallback(newValue => onChangeFilters('price', newValue), [onChangeFilters]); // FOR RATING

  const handleChangeRating = useCallback(newValue => onChangeFilters('rating', newValue), [onChangeFilters]); // FOR COLOR

  const handleChangeColor = useCallback(value => {
    const newValue = filters.color.includes(value) ? filters.color.filter(color => color !== value) : [...filters.color, value];
    onChangeFilters('color', newValue);
  }, [onChangeFilters, filters.color]); // FOR CATEGORY

  const handleChangeCategory = useCallback(value => {
    const newValue = filters.category.includes(value) ? filters.category.filter(category => category !== value) : [...filters.category, value];
    onChangeFilters('category', newValue);
  }, [onChangeFilters, filters.category]); // FOR GENDER

  const handleChangeGender = useCallback(value => {
    const newValue = filters.gender.includes(value) ? filters.gender.filter(gender => gender !== value) : [...filters.gender, value];
    onChangeFilters('gender', newValue);
  }, [onChangeFilters, filters.gender]);
  return <Drawer open={open} onClose={handleClose} PaperProps={{
    sx: {
      width: 280
    }
  }} slotProps={{
    backdrop: {
      invisible: true
    }
  }}>
      <FlexBetween gap={2} padding="1rem .5rem 1rem 1.25rem">
        <Paragraph fontSize={16} fontWeight={600}>
          Filters
        </Paragraph>

        <div>
          <IconButton onClick={handleClear}>
            <Badge variant="dot" color="error" invisible={filterApplied}>
              <Refresh fontSize="small" />
            </Badge>
          </IconButton>

          <IconButton onClick={handleClose}>
            <Clear fontSize="small" />
          </IconButton>
        </div>
      </FlexBetween>

      <Divider />

      <Box flexGrow={1} height="100%" overflow="hidden">
        <Scrollbar>
          <Stack spacing={3} padding="1rem 1.5rem">
            {
            /* GENDER */
          }
            <div>
              <Paragraph fontSize={14} fontWeight={600}>
                Gender
              </Paragraph>

              <FormGroup>
                {GENDERS.map(gender => <CheckboxLabel key={gender.value} label={gender.label} checked={filters.gender.includes(gender.value)} onChange={() => handleChangeGender(gender.value)} />)}
              </FormGroup>
            </div>

            {
            /* CATEGORY */
          }
            <div>
              <Paragraph fontSize={14} fontWeight={600}>
                Category
              </Paragraph>

              <FormGroup>
                {CATEGORIES.map(category => <CheckboxLabel key={category.value} label={category.label} checked={filters.category.includes(category.value)} onChange={() => handleChangeCategory(category.value)} />)}
              </FormGroup>
            </div>

            {
            /* COLOR */
          }
            <div>
              <Paragraph pb="9px" fontSize={14} fontWeight={600}>
                Colors
              </Paragraph>

              <Stack direction="row" spacing={2}>
                {COLORS.map(color => <ColorCheckbox key={color} bgColor={color} checked={filters.color.includes(color)} onChange={() => handleChangeColor(color)} />)}
              </Stack>
            </div>

            {
            /* PRICE */
          }
            <div>
              <Paragraph pb="9px" fontSize={14} fontWeight={600}>
                Price
              </Paragraph>

              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <TextField type="number" value={filters.price[0]} onChange={e => handleChangePriceRange([+e.target.value, filters.price[1]])} />

                <Paragraph fontWeight={500}>-</Paragraph>

                <TextField type="number" value={filters.price[1]} onChange={e => handleChangePriceRange([filters.price[0], +e.target.value])} />
              </Stack>

              <Slider min={0} max={200} size="small" value={filters.price} valueLabelDisplay="auto" valueLabelFormat={v => `$${v}`} onChange={(_, v) => handleChangePriceRange(v)} marks={[{
              value: 0,
              label: '$0'
            }, {
              value: 50,
              label: '$50'
            }, {
              value: 100,
              label: '$100'
            }, {
              value: 150,
              label: '$150'
            }, {
              value: 300,
              label: '$200'
            }]} />
            </div>

            {
            /* RATINGS */
          }
            <div>
              <Paragraph pb="9px" fontSize={14} fontWeight={600}>
                Ratings
              </Paragraph>

              <Stack spacing={1}>
                {RATINGS.map(value => <RatingItem key={value} value={value} isActive={filters.rating === value} onClick={() => handleChangeRating(value)} />)}
              </Stack>
            </div>
          </Stack>
        </Scrollbar>
      </Box>
    </Drawer>;
}
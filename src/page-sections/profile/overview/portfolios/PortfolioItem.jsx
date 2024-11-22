import Chip from '@mui/material/Chip';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'; // MUI ICON COMPONENTS

import Download from '@mui/icons-material/Download';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'; // CUSTOM COMPONENTS

import { H6, Small } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween'; // STYLED COMPONENT

import { StyledIconButton, DateWrapper, ItemRoot } from './styles'; // ==============================================================================================

// ==============================================================================================
export default function PortfolioItem({
  tag,
  date,
  title,
  imgLink
}) {
  return <ItemRoot>
      <CardMedia component="img" image={imgLink} height={152} />

      <DateWrapper>
        <Small lineHeight={1} fontWeight={600}>
          12
        </Small>
        <Small color="text.secondary">Jan</Small>
      </DateWrapper>

      <CardContent>
        <FlexBetween>
          <Chip label={tag} size="small" />

          <div>
            <StyledIconButton size="small" disableRipple className="mr">
              <Download color="primary" fontSize="small" />
            </StyledIconButton>

            <StyledIconButton size="small" disableRipple>
              <FavoriteBorder color="action" fontSize="small" />
            </StyledIconButton>
          </div>
        </FlexBetween>

        <div className="text-group">
          <H6 fontSize={14} lineHeight={1}>
            {title}
          </H6>

          <Small color="text.secondary">{date}</Small>
        </div>
      </CardContent>
    </ItemRoot>;
}
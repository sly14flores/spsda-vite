import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
import { FlexRowAlign, FlexBox } from '@/components/flexbox'; // CUSTOM ICON COMPONENTS

import ChartPieIcon from '@/icons/ChartPieIcon'; // STYLED COMPONENT

const StyledRoot = styled(Card)(({
  theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .content': {
    flexGrow: 1,
    flexShrink: 0,
    '.icon-wrapper': {
      width: 24,
      height: 24,
      borderRadius: '50%',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.divider
    }
  },
  '& .avatar': {
    width: 'auto',
    height: 'auto',
    borderRadius: '0%'
  }
}));
export default function LeadCard() {
  return <StyledRoot className="p-3 h-full">
      <div className="content">
        <Paragraph fontWeight={600}>Leads Converted</Paragraph>
        <H6 fontSize={24} color="primary.main">
          80%
        </H6>

        <FlexBox alignItems="center" mt={1} gap={1}>
          <FlexRowAlign gap={1} className="icon-wrapper">
            <ChartPieIcon color="inherit" fontSize="small" />
          </FlexRowAlign>

          <Paragraph fontSize={12} fontWeight={600}>
            56 out of 70
          </Paragraph>
        </FlexBox>
      </div>

      <Avatar alt="Lead Converted" src="/static/illustration/crm-lead.svg" className="avatar" />
    </StyledRoot>;
}
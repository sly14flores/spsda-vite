import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // MUI

import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar'; // CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from '@/components/flexbox';
import { H6, Paragraph, Span } from '@/components/typography'; // CUSTOM DATA

import { ORDER_LIST } from '@/__fakeData__/dashboards/sales';
export default function RecentOrders() {
  const {
    t
  } = useTranslation();
  return <Card className="p-3 h-full">
      <FlexBetween pb={1}>
        <H6 fontSize={14}>{t('Recent Orders')}</H6>

        <NavLink to="#">
          <Span fontSize={14} color="primary.main">
            View all
          </Span>
        </NavLink>
      </FlexBetween>

      {ORDER_LIST.map((item, index) => <FlexBetween key={index} mt={3.5} gap={1}>
          <FlexBox alignItems="center" gap={1.5}>
            <Avatar src={item.image} alt={item.name} sx={{
          borderRadius: '15%'
        }} />

            <div>
              <H6 lineHeight={1} fontSize={14}>
                {item.name}
              </H6>

              <Paragraph pt={0.6} fontSize={12} color="text.secondary">
                10 min ago
              </Paragraph>
            </div>
          </FlexBox>

          <Paragraph fontSize={12} fontWeight={600}>
            ${item.price}
          </Paragraph>
        </FlexBetween>)}
    </Card>;
}
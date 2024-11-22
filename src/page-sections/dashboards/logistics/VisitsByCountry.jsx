import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { nanoid } from 'nanoid'; // CUSTOM COMPONENTS

import MoreButton from '@/components/more-button';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { format } from '@/utils/currency'; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  name: 'USA',
  total: 68258,
  percentage: 4.67,
  subtitle: '30% visits',
  image: '/static/flags/usa-round.png'
}, {
  id: nanoid(),
  name: 'UK',
  total: 50683,
  percentage: 2.59,
  subtitle: '20% visits',
  image: '/static/flags/uk-round.png'
}, {
  id: nanoid(),
  name: 'Germany',
  total: 62053,
  percentage: -1.18,
  subtitle: '28% visits',
  image: '/static/flags/germany-round.png'
}, {
  id: nanoid(),
  name: 'Spain',
  total: 40369,
  percentage: -2.98,
  subtitle: '18% visits',
  image: '/static/flags/spain-round.png'
}, {
  id: nanoid(),
  total: 3258,
  name: 'China',
  percentage: 1.22,
  subtitle: '4% visits',
  image: '/static/flags/china-round.png'
}];
export default function VisitsByCountry() {
  return <Card className="p-3 h-full">
      <FlexBetween mb={4}>
        <div>
          <Paragraph ellipsis lineHeight={1.3} fontSize={18} fontWeight={500}>
            Visits by country
          </Paragraph>

          <Small fontWeight={500} color="text.secondary">
            Total 200 countries visits
          </Small>
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Stack spacing={2}>
        {DATA.map(({
        id,
        image,
        name,
        total,
        subtitle,
        percentage
      }) => <FlexBetween key={id}>
            <FlexBox gap={1.5} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
              <Avatar variant="rounded" alt={name} src={image} />

              <Box textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden">
                <Paragraph ellipsis fontSize={16} lineHeight={1} fontWeight={600}>
                  {name}
                </Paragraph>

                <Small ellipsis fontWeight={500} color="text.secondary">
                  {subtitle}
                </Small>
              </Box>
            </FlexBox>

            <Box textAlign="end">
              <Paragraph fontWeight={500}>{format(total)}</Paragraph>
              <Small fontWeight={500} color={percentage < 0 ? 'error.main' : 'success.main'}>
                {percentage}
              </Small>
            </Box>
          </FlexBetween>)}
      </Stack>
    </Card>;
}
import { useTranslation } from 'react-i18next'; // MUI

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/system/colorManipulator'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // STYLED COMPONENTS

const HeadTableCell = styled(TableCell)(({
  theme
}) => ({
  paddingBottom: 8,
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.3)}`
}));
const BodyTableCell = styled(TableCell)(({
  theme
}) => ({
  fontWeight: 500,
  padding: '0.5rem 0',
  color: theme.palette.text.primary,
  '&:first-of-type': {
    minWidth: 200
  }
}));
export default function CourseStatus() {
  const {
    t
  } = useTranslation();
  return <Card className="p-3 h-full">
      <H6 fontSize={14} mb={2}>
        {t('Course Status')}
      </H6>

      <Scrollbar autoHide={false}>
        <Table>
          <TableHead>
            <TableRow>
              <HeadTableCell>Name</HeadTableCell>
              <HeadTableCell>Category</HeadTableCell>
              <HeadTableCell>Earned</HeadTableCell>
              <HeadTableCell>Visitor</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {courseList.map((item, index) => <TableRow key={index}>
                <BodyTableCell>
                  <FlexBox alignItems="center" gap={1}>
                    <img src={item.image} alt="product title" width="40px" />
                    <div>
                      <Paragraph fontWeight={600}>{item.name}</Paragraph>
                      <Paragraph fontSize={12} color="text.secondary">
                        {item.description}
                      </Paragraph>
                    </div>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{item.category}</BodyTableCell>
                <BodyTableCell>{currency(item.earned)}</BodyTableCell>
                <BodyTableCell>{item.visitor}</BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}
const courseList = [{
  earned: 19.0,
  visitor: 1500,
  category: 'Graphic Template',
  name: 'Flat Line Illustration',
  image: '/static/thumbnail/1.png',
  description: 'Sketch App, Adobe Illustration'
}, {
  earned: 45.0,
  visitor: 1200,
  name: 'React Live',
  category: 'Development',
  image: '/static/thumbnail/2.png',
  description: 'Visual Studio, React'
}, {
  earned: 35.0,
  visitor: 1100,
  category: 'Music',
  name: 'Guitar Lessons',
  description: 'Squarespace',
  image: '/static/thumbnail/3.png'
}, {
  earned: 34.0,
  visitor: 1300,
  category: 'Editing',
  name: 'Video Editing',
  description: 'After Effects',
  image: '/static/thumbnail/4.png'
}];
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // MUI ICON COMPONENT

import Add from '@mui/icons-material/Add'; // CUSTOM COMPONENTS

import PostItem from './PostItem';
import { H6 } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween';
export default function Post() {
  return <Card className="p-3">
      <FlexBetween flexWrap="wrap" gap={1}>
        <H6 fontSize={16}>Posts</H6>

        <Button color="secondary" variant="outlined" startIcon={<Add />}>
          Create a post
        </Button>
      </FlexBetween>

      <Stack spacing={3} mt={2}>
        <PostItem category="Esports" date="Nov 21, 2021" imgLink="/static/post/1.png" title="The International on the way 2021" />

        <PostItem category="Environment" date="Aug 21, 2021" imgLink="/static/post/2.png" title="Global Warming Conclusion" />

        <PostItem category="Environment" date="Jun 21, 2021" imgLink="/static/post/3.png" title="Crypto is the future" />
      </Stack>
    </Card>;
}
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox'; // CUSTOM COMPONENTS

import { H6, Paragraph } from '@/components/typography';
export default function DeleteAccount() {
  return <Card sx={{
    pb: 3
  }}>
      <Box padding={3}>
        <H6 fontSize={14}>Delete Your Account</H6>
        <Paragraph mt={0.5} fontSize={13} lineHeight={1.7} maxWidth={600}>
          When you delete your account, you lose access to Front account services, and we
          permanently delete your personal data. You can cancel the deletion for 14 days.
        </Paragraph>
      </Box>

      <Divider />

      <Stack direction="row" alignItems="center" padding={3} pl={2}>
        <Checkbox />
        <H6 fontSize={12}>Confirm that I want to delete my account.</H6>
      </Stack>

      <Box pl={3} maxWidth={120}>
        <Button color="error" fullWidth>
          Delete
        </Button>
      </Box>
    </Card>;
}
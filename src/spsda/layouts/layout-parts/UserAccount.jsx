import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
// import Badge from '@mui/material/Badge';
// import Button from '@mui/material/Button'; // CUSTOM COMPONENTS

import { Paragraph } from '@/components/typography';
import AvatarLoading from '@/components/avatar-loading';
import FlexRowAlign from '@/components/flexbox/FlexRowAlign';

import useStorage from '@/spsda/hooks/useStorage'

const firstLetterCap = (word) => {

  const firstLetter = word.charAt(0)
  
  const firstLetterCap = firstLetter.toUpperCase()
  
  const remainingLetters = word.slice(1)
  
  const capitalizedWord = firstLetterCap + remainingLetters

  return capitalizedWord

}

export default function UserAccount() {

  const user = useStorage().get()

  return <FlexRowAlign flexDirection="column" py={5}>

      <AvatarLoading alt="user" percentage={100} src="/static/user/avatar.png" sx={{
        width: 50,
        height: 50
      }} />

      <Box textAlign="center" pt={1.5} pb={3}>
        <Chip variant="outlined" label={firstLetterCap(user?.role)} size="small" />

        <Paragraph fontSize={16} fontWeight={600} mt={2}>
          {`${user?.first_name} ${user?.last_name}`}
        </Paragraph>

        <Paragraph fontSize={13} fontWeight={500} color="text.secondary" mt={0.5}>
          {user?.email}
        </Paragraph>
      </Box>

    </FlexRowAlign>;
}
import { useNavigate } from 'react-router-dom'; // MUI

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import useTheme from '@mui/material/styles/useTheme'; // CUSTOM UTILS METHOD

import { isDark } from '@/utils/constants'; // ==============================================================

// ==============================================================
export default function ComponentPreviewCard({
  title,
  image,
  link
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  return <Card sx={{
    border: 1,
    boxShadow: 0,
    borderRadius: 3,
    borderColor: isDark(theme) ? 'grey.700' : 'grey.100'
  }}>
      <CardActionArea disableRipple onClick={() => navigate(link)}>
        <CardMedia alt={title} height="150" image={image} component="img" sx={{
        p: 2,
        backgroundColor: isDark(theme) ? 'grey.900' : 'grey.100',
        ...(isDark(theme) && {
          opacity: 0.5
        })
      }} />

        <CardContent sx={{
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 13
      }}>
          {title}
        </CardContent>
      </CardActionArea>
    </Card>;
}
import { ReactNode } from 'react';

import { Box, Typography } from '@mui/material';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  count?: number;
};

function CustomContainer({ children, title, description, count }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: '#1c2128',
        height: 'calc(100vh - 130px)',
        p: '15px',
        borderRadius: 4,
        border: '1px solid rgb(55, 62, 71)',
      }}
    >
      <Typography sx={{ fontFamily: 'system-ui', fontWeight: 700 }}>
        {title} - {count || 0}
      </Typography>
      <Typography sx={{ fontFamily: 'system-ui' }}>{description}</Typography>
      <Box sx={{ overflowY: 'auto', height: '90%', marginTop: '5px' }}>
        {children}
      </Box>
    </Box>
  );
}

export default CustomContainer;

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', margin:'auto', justifyContent:'center', marginTop:'10px' }}>
      <CircularProgress />
    </Box>
  );
}
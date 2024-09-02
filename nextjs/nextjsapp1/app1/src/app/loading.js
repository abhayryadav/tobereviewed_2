
'use client';

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <center >
      <div className='divloading2'>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    </center>
  );
}
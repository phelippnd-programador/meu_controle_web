import React from 'react';
import { CircularProgress, Container, Box, Typography } from '@mui/material';

const Loading: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Carregando...
        </Typography>
      </Box>
    </Container>
  );
};

export default Loading;

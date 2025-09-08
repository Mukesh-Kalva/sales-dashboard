'use client';
import { CircularProgress, Box, Typography } from '@mui/material';

interface Props {
  score?: number;
}

export default function CustomerSatisfactionChart({ score = 0 }: Props) {
  return (
    <Box textAlign="center">
      <CircularProgress
        variant="determinate"
        value={score}
        size={120}
        thickness={5}
      />
      <Typography variant="h6" mt={2}>
        {score}% Satisfaction
      </Typography>
    </Box>
  );
}

import { Card, CardContent, Typography } from '@mui/material';

interface KpiCardProps {
  title: string;
  value: string | number | undefined;
}

export default function KpiCard({ title, value }: KpiCardProps) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold">
          {value ?? '--'}
        </Typography>
      </CardContent>
    </Card>
  );
}

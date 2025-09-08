import { AppBar, Toolbar, Typography } from '@mui/material';

export default function TopBar() {
  return (
    <AppBar position="static" color="primary" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Sales Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

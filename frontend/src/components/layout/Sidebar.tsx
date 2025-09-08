import { Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import Link from 'next/link';

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} href="/reports">
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Drawer>
  );
}

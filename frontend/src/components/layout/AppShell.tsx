import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { ReactNode } from 'react';

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />
      <Box flexGrow={1} display="flex" flexDirection="column">
        <TopBar />
        <Box component="main" flexGrow={1} p={3} bgcolor="#f9f9f9">
          {children}
        </Box>
      </Box>
    </Box>
  );
}

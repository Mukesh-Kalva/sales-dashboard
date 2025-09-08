import {
    Card,
    CardContent,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from '@mui/material';
  
  interface Product {
    name: string;
    sales: number;
    revenue: number;
  }
  
  interface Props {
    products?: Product[];
  }
  
  export default function TopProductsTable({ products = [] }: Props) {
    return (
      <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Top Products
          </Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Sales</TableCell>
                <TableCell align="right">Revenue ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((p, idx) => (
                <TableRow key={idx}>
                  <TableCell>{p.name}</TableCell>
                  <TableCell align="right">{p.sales}</TableCell>
                  <TableCell align="right">{p.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }
  
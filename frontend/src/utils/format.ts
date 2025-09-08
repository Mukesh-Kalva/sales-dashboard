export function formatCurrency(value: number | undefined): string {
    if (value === undefined) return '--';
    return `$${value.toLocaleString()}`;
  }
  
  export function formatNumber(value: number | undefined): string {
    if (value === undefined) return '--';
    return value.toLocaleString();
  }
  
  export function formatPercent(value: number | undefined): string {
    if (value === undefined) return '--';
    return `${value}%`;
  }
  
'use client';
import { create } from 'zustand';
import api from '../lib/axios';

interface DashboardState {
  metrics: any;
  revenue: any;
  visitors: any;
  satisfaction: any;
  products: any[];
  fetchAll: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  metrics: null,
  revenue: null,
  visitors: null,
  satisfaction: null,
  products: [],
  fetchAll: async () => {
    try {
      const [m, r, v, s, p] = await Promise.all([
        api.get('/dashboard/metrics'),
        api.get('/dashboard/revenue'),
        api.get('/dashboard/visitor-insights'),
        api.get('/dashboard/customer-satisfaction'),
        api.get('/dashboard/top-products'),
      ]);
      set({
        metrics: m.data,
        revenue: r.data,
        visitors: v.data,
        satisfaction: s.data,
        products: p.data,
      });
    } catch (err) {
      console.error(err);
    }
  },
}));

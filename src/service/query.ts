'use client';

import { useQuery } from 'react-query';
import { api } from './api';

export function GetProducts() {
  return useQuery(
    'products',
    async () => (await api.get('/products?page=1&rows=8&sortBy=id&orderBy=ASC')).data);
}
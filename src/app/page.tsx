'use client';

import CartPanel from '@/components/cartPanel/cartPanel';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Product from '@/components/product/product';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const toggleCartPanel = () => setOpen(!open);

  return (
    <div>
      <Header toggle={ toggleCartPanel } />
      <CartPanel open={open} toggle={ toggleCartPanel }/>
      <Product />
      <Footer />
    </div>
  );
}

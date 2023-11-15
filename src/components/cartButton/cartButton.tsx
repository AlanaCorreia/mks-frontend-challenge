'use client';

import Image from 'next/image';
import { Button } from './cartButton.style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type Props = {
  toggle: () => void;
}

export default function CartButton({toggle}: Props) {
  const counter = useSelector((state: RootState) => state.cart);

  return (
    <Button onClick={toggle}>
      <Image src={'/vector.svg'} alt={'cart'} width={19} height={18} />
      <p>{(counter.length === 0) ? 0 : counter.length}</p>
    </Button>
  );
}

import Image from 'next/image';
import { Button } from './cartButton.style';

export default function CartButton() {
  return (
    <Button>
      <Image src={'/vector.svg'} alt={'cart'} width={19} height={18} />
      <p>0</p>
    </Button>
  );
}

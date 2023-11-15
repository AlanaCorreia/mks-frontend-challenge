import Image from 'next/image';
import { BuyButton, Card, Container, Description, Price, Title } from './productCard.style';
import { IProduct } from '@/type/IProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartReducer';
import { AppDispatch } from '@/store/store';

type Props = {
  data: IProduct;
}
export default function ProductCard({ data }: Props) {
  const { id, name, description, price, photo } = data;
  const dispatch = useDispatch<AppDispatch>();
  const priceSerialize = price.split('.')[0];

  return (
    <Card key={id}>
      <Image src={ photo } alt='' width={111} height={138} />
      <Container>
        <Title>{ name }</Title>
        <Price>R$ { priceSerialize }</Price>
      </Container>
      <Description>{ description }</Description>
      <BuyButton onClick={() => dispatch(addToCart({...data, quantity: 1}))}>
        <Image src={'./shopping-bag.svg'} alt='' width={12} height={13.5} />
        <p>COMPRAR</p>
      </BuyButton>
    </Card>
  );
}

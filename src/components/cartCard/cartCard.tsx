import Image from 'next/image';
import { ButtonContainer, CountButton, Card, Container, CountText, Price, QuantityText, Title, CloseButton } from './cartCard.style';
import { useDispatch } from 'react-redux';
import { decrementCart, incrementCart, removeToCart } from '@/store/cartReducer';
import { AppDispatch } from '@/store/store';
import { ICard } from '@/type/ICart';

type Props = {
  data: ICard
}
export default function CartCard({ data }: Props) {
  const { id, name, price, photo, quantity } = data;

  const dispatch = useDispatch<AppDispatch>();

  const priceSerialize = price.split('.')[0];

  return (
    <Card key={id}>
      <Image src={ photo } alt='' width={50} height={61} />
      <Title>{ name }</Title>
      <Container>
        <QuantityText>Qtd:</QuantityText>
        <ButtonContainer>
          <CountButton onClick={() => dispatch(decrementCart(data))}>
            -
          </CountButton>
          <CountText>{quantity}</CountText>
          <CountButton onClick={() => dispatch(incrementCart(data))}>
            +
          </CountButton>
        </ButtonContainer>
      </Container>
      <Price>R${ priceSerialize }</Price>
      <CloseButton onClick={() => dispatch(removeToCart(data))}>
        x
      </CloseButton>
    </Card>
  );
}
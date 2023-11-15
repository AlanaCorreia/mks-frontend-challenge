import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import CartCard from '../cartCard/cartCard';
import { ICard } from '@/type/ICart';
import { useEffect, useState } from 'react';
import { CardsContainer, CheckoutButton, CloseButton, Container, RowContainer1, RowContainer2, Text, Title } from './cartPanel.style';

type Props = {
  open: boolean
  toggle: () => void;
}

export default function CartPanel ({ open, toggle }: Props) {
  const cartProducts = useSelector((state: RootState) => state.cart);

  const [total, SetTotal] = useState(0);

  useEffect(() => {
    console.log(cartProducts);
    
    function totalCart (products: any) {
      const total = products.reduce((total: any, curr: any) => total + curr.price * curr.quantity, 0);
      SetTotal(total);
    }
    totalCart(cartProducts);
  }, [cartProducts]);


  return (
    open &&
    <Container>
      <RowContainer1>
        <Title>Carrinho <br /> de compras</Title>
        <CloseButton onClick={ toggle }>x</CloseButton>
      </RowContainer1>
      <CardsContainer>
        { cartProducts.map((product: ICard) => <CartCard key={product.id} data={product}/>) }
      </CardsContainer>
      <RowContainer2 top={'top'}>
        <Text>Total:</Text>
        <Text>R${total}</Text>
      </RowContainer2>
      <CheckoutButton>Finalizar Compra</CheckoutButton>
    </Container>
  );
}

import { Container, Logo } from './header.style';
import CartButton from '../cartButton/cartButton';

export default function Header() {
  return (
    <Container>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>
      <CartButton />
    </Container>
  );
}
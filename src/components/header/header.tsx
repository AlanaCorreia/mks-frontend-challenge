import { Container, Logo } from './header.style';
import CartButton from '../cartButton/cartButton';

type Props = {
  toggle: () => void;
}
export default function Header({toggle}: Props) {
  return (
    <Container>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>
      <CartButton toggle={toggle}/>
    </Container>
  );
}
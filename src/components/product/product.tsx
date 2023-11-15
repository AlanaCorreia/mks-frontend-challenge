'use client';

import { GetProducts } from '@/service/query';
import ProductCard from '../productCard/productCard';
import { IProduct } from '@/type/IProduct';
import { CardsContainer, Main } from './product.style';



export default function Product() {
  const { data, error, isLoading } = GetProducts();
  
  if (isLoading) return <p>carregando</p>;

  if (error) return <p>Erro na requisição</p>;

  return (
    <Main>
      <CardsContainer>
        { data.products.map((product: IProduct) => <ProductCard key={product.id} data={product}/>) }
      </CardsContainer>
    </Main>
  );


}
